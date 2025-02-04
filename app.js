import { listes } from "./listes.js";
import { graph } from "./graph.js";

listes().then(emailList => {
    graph(emailList);
});