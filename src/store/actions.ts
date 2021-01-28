const Actions = {
  addSync(context: any) {
    console.log("Alen ~ addSync ~ context", context);
    setTimeout(() => {
      context.commit('add',100)
    }, 3000);
  },
};
export default Actions;
