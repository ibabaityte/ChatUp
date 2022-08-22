const infoToUpdate = async (req) => {
    let object = {};
    for (let i in req.body) {
        object[i] = await req.body[i];
    }
    return object;
};

export {infoToUpdate};