/**
 * 测试集适配
 */
module.exports = {
  deferred: () => {
    let resolveFn, rejectFn;
    const promise = new Promise((resolve, reject) => {
      resolveFn = resolve;
      rejectFn = reject;
    });
    promise.resolve = value => resolveFn(value);
    promise.reject = reason => rejectFn(reason);
    return { promise, resolve: resolveFn, reject: rejectFn };
  }
};
