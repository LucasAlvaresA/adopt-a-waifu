type MenuOptions = "" | "all" | "dragon" | "neko" | "vampire";

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dragon: false,
        neko: false,
        vampire: false,
    };

    if(activeMenu !== "") {
        returnObject[activeMenu] = true
    }

    return returnObject;
};
