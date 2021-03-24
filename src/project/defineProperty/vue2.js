const shareProperDefinition = {
  enumerable: true,
  configurable: true,
};

const _proxy = (target, temp, key) => {
  shareProperDefinition.get = function proxyGetter() {
    return temp[key];
  };
  shareProperDefinition.set = function proxySetter(val) {
    temp[key] = val;
    // window.isUpdatingChildComponent = false; 相当于一个Flag;
    // 只有当在父组件中修改传递给子组件的Prop值的时候，才会被赋值为True;
    if (!window.isUpdatingChildComponent) {
      throw `不可以直接更改:${val}`;
    }
    window.isUpdatingChildComponent = true;
  };

  Object.defineProperty(target, key, shareProperDefinition);
};

export default _proxy;
