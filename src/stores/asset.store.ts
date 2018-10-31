import find from 'lodash-es/find';
import some from 'lodash-es/some';
import { action, computed, observable, runInAction } from 'mobx';

const enum assetNames {
  logo = 'bowl.svg',
}

class AssetStore {
  @observable private assets: any = [];

  @action
  public loadLogo() {
    try {
      import(
        /* webpackMode: "eager" */
        `../../public/assets/svg/${assetNames.logo}`)
        .then((svgHTML) => {
          runInAction(() => {
            const fileFormatted = {
              data: svgHTML,
              name: assetNames.logo,
            };

            this.assets.push(fileFormatted);
          });
        })
        .catch((e) => {
          runInAction(() => {
            console.warn('Error in importing logo');
          });
        });
    } catch (e) {
      console.warn('Syntax error in importing logo');
    }
  }

  @computed
  public get logo() {
    const logo = find(this.assets, (asset) => {
      return asset.name === assetNames.logo;
    });

    return logo ? logo.data : null;
  }
}

export const assetStore = new AssetStore();
