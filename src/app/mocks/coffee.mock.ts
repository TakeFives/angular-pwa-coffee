import { Coffee } from "../logic/Coffee";
import { PlaceLocation } from "../logic/PlaceLocation";

  const list: Coffee[] = [
    new Coffee('1','Espresso', 'Coffee House A', new PlaceLocation('123 Main St', 'New York')),
    new Coffee('2','Latte', 'Cafe B', new PlaceLocation('456 Elm St', 'Los Angeles')),
    new Coffee('3', 'Cappuccino', 'Java Junction', new PlaceLocation('789 Oak St', 'Chicago')),
    new Coffee('4', 'Americano', 'Mocha Madness', new PlaceLocation('101 Pine St', 'San Francisco')),
    new Coffee('5', 'Mocha', 'Bean Bar', new PlaceLocation('202 Maple St', 'Seattle')),
    new Coffee('6', 'Macchiato', 'Brew Bistro', new PlaceLocation('303 Cedar St', 'Boston')),
    new Coffee('7', 'Affogato', 'Sugar & Spice', new PlaceLocation('404 Birch St', 'Miami')),
    new Coffee('8', 'Flat White', 'Creamy Cafe', new PlaceLocation('505 Walnut St', 'Houston')),
    new Coffee('9', 'Irish Coffee', 'Shamrock Roasters', new PlaceLocation('606 Spruce St', 'Philadelphia')),
    new Coffee('10', 'Turkish Coffee', 'Bosphorus Brews', new PlaceLocation('707 Cherry St', 'Atlanta'))
];