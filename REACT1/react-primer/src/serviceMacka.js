import {Macka} from "./mackaKalup";
import {Kuce} from "./kuceKalup";
export class ServiceZivotinja
{
    constructor()
    {
        this.zivotinje = [];
        this.zivotinje.push(new Macka("plava", "sijamska"));
        this.zivotinje.push(new Macka("crna", "sijamska"));
        this.zivotinje.push(new Macka("bela", "ruska"));
        this.zivotinje.push(new Macka("braon", "domaca"));
        this.zivotinje.push(new Macka("plava", "kntenjerka"));
        this.zivotinje.push(new Kuce("bela", "ruska"));
        this.zivotinje.push(new Kuce("braon", "domaca"));
        this.zivotinje.push(new Kuce("plava", "kntenjerka"));
    }
}