import { Player } from "./player.js";
import {TennisPlayer} from './tennisPlayer.js';

let player = new Player("Messi");
 player.birthPlace();

 let tennisPlayer = new TennisPlayer('Kaie Kanepi', 'Estonia', 37);
 tennisPlayer.birthPlace();
 tennisPlayer.playerAge();