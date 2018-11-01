import { Cat } from '../animals/cat';
import { Lizard } from '../animals/lizard';
import { Snake } from '../animals/snake';
import { ClownFish } from './../animals/clown-fish';
import { Dog } from './../animals/dog';

export class Printer {
    public print(msg: Object): void {
        if (msg instanceof Cat) {
            console.log(`You choose pet cat, it is ${msg.breed} and costs $${msg.price}`);
        } else if (msg instanceof ClownFish) {
            console.log(`You choose pet cat, it is ${msg.species} and costs $${msg.price}`);
        } else if (msg instanceof Dog) {
            console.log(`You choose pet cat, it is ${msg.breed} and costs $${msg.price}`);
        } else if (msg instanceof Lizard) {
            console.log(`You choose pet lizard, venomous: ${msg.isVenomous} and costs $${msg.price}`);
        } else if (msg instanceof Snake) {
            console.log(`You choose pet snake, venomous: ${msg.isVenomous} and costs $${msg.price}`);
        }
    }
}
