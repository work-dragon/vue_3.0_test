enum pStatus {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

class _Promise {
  private statue = pStatus.PENDING;
  private _resolveCbs: Array<Function>;
  private _rejectedCbs: Array<Function>;

  constructor(executor: (resolve: Function, reject: Function) => void) {
    this._rejectedCbs = [];
    this._resolveCbs = [];

    const _resolve = (value: any): void => {
      if (this.statue !== pStatus.PENDING) return;
      this.statue = pStatus.FULFILLED;

      while (this._resolveCbs.length) {
        // 把数组的第一个元素从其中删除,并返回第一个元素的值
        const callback = this._resolveCbs.shift();
        callback && callback(value);
      }
    };

    const _reject = (reason: any): void => {
      if (this.statue !== pStatus.PENDING) return;
      this.statue = pStatus.FULFILLED;

      while (this._rejectedCbs.length) {
        const callback = this._rejectedCbs.shift();
        callback && callback(reason);
      }
    };

    executor(_resolve, _reject);
  }

  then(onResolved: Function, onRejected: Function) {
    typeof onResolved !== "function" ? (onResolved = (val: any) => val) : null;
    typeof onRejected !== "function"
      ? (onRejected = (val: any) => {
          throw val;
        })
      : null;

    return new _Promise((resolve, reject) => {
      const resolveFn = (val: any) => {
        try {
          const result = onResolved(val);
          result instanceof _Promise ? result.then(resolve, reject) : resolve(result);
        } catch (error) {
          reject(error);
        }
      };
      this._resolveCbs.push(resolveFn);

      const rejectFn = (val: any) => {
        try {
          const result = onRejected(val);
          result instanceof _Promise ? result.then(resolve, reject) : reject(result);
        } catch (error) {
          reject(error);
        }
      };
      this._rejectedCbs.push(rejectFn);
    });
  }

  static _resolve(val: any) {
    if (val instanceof Promise) return val;
    return new _Promise((resolve) => resolve(val));
  }

  static _reject(val: any) {
    return new _Promise((_, reject) => reject(val));
  }

  static all(lists: Array<any>) {
    return new _Promise((resolve, reject) => {
      let result: Array<any> = [];
      let count = 0;
      for (let [index, value] of lists.entries()) {
        this._resolve(value).then(
          (res: any) => {
            result[index] = res;
            count++;
            if (count === lists.length) resolve(result);
          },
          (err: Error) => {
            reject(err);
          },
        );
      }
    });
  }

  static race(lists: Array<any>) {
    return new _Promise((resolve, reject) => {
      for (let p of lists) {
        this._resolve(p).then(
          (res: any) => {
            resolve(res);
          },
          (err: Error) => {
            reject(err);
          },
        );
      }
    });
  }
}

export default _Promise;
