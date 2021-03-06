/**
 * Run `execute` for all items returned from getPage, one page at a time. If any call to getPage or execute fails, the resulting promise is rejected.
 * @typeparam T  object that contains an Id property
 * @param getPage The function for receiving a page
 * @param execute The function to execute on each item
 */
export const executeForAll = (getPage, execute) => {
    const recur = (after) => {
        return getPage({ after }).then(({ data, hasMore }) => {
            const executePromises = data.map(({ id }) => execute(id));
            // Execute for all items in current page, then recur
            return Promise.all(executePromises).then(() => {
                return hasMore ? recur(data[data.length - 1].id) : null;
            });
        });
    };
    return recur();
};
//# sourceMappingURL=legacyPaginator.js.map