import { CharactersCollection } from "./CharactersCollections";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([10,3,-5,0])
const charactersCollection = new CharactersCollection("Xaaaby")
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)


const sorter = new Sorter(linkedList)
sorter.sort()
linkedList.print()