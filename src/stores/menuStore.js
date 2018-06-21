import { observable, action } from 'mobx';

class menuStore {
    @observable menuList = [];

    @action setMenuList(menu) {
        this.menuList = menu;
    }
}

export default new menuStore();