import Cachorro from "./Cachorro";
import Dono from "./Dono";

var dono = new Dono("Valerio", "(47) 9 8499-5555");

var c1 = new Cachorro("Cidi", "Sao Bernardo", "Caramelo", "M", "Grande", dono );
c1.exibirCachorro();
c1.exbirDono();
console.log("\n")
var c2 = new Cachorro("Terrorista", "Vira-Lata", "Preto", "F", "Pequeno", dono);
c2.exibirCachorro();
c2.exbirDono();