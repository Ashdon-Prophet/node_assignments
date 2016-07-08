//contructor
function Card(type, value, name, unicode){
    this.card = [];
    this.card[0] = type;
    this.card[1] = value;
    this.card[2] = name;
    this.card[3] = unicode;
}
function Deck(){
    var self = this;

    this.deck = [];

    var temp = function(){
        var deck = [];
        //hearts
        deck[0] = new Card('heart', 1, 'ace', 'U+1F0A1');
        for(var i = 1; i < 9; i++){
            x = i+1;
            deck[i] = new Card('heart', x, (x).toString(), 'U+1F0A'+x);
        }
        deck[9] = new Card('heart', 10, '10', 'U+1F0AA');
        deck[10] = new Card('heart', i, 'jack', 'U+1F0AB');
        deck[11] = new Card('heart', i, 'queen', 'U+1F0AD');
        deck[12] = new Card('heart', i, 'king', 'U+1F0AE');
        //spades
        deck[0] = new Card('spades', 1, 'ace', 'U+1F0A1');
        for(var i = 1; i < 9; i++){
            x = i+1;
            deck[i] = new Card('spades', x, (x).toString(), 'U+1F0A'+x);
        }
        deck[9] = new Card('spades', 10, '10', 'U+1F0AA');
        deck[10] = new Card('spades', i, 'jack', 'U+1F0AB');
        deck[11] = new Card('spades', i, 'queen', 'U+1F0AD');
        deck[12] = new Card('spades', i, 'king', 'U+1F0AE');
        //diamonds
        deck[0] = new Card('diamonds', 1, 'ace', 'U+1F0A1');
        for(var i = 1; i < 9; i++){
            x = i+1;
            deck[i] = new Card('diamonds', x, (x).toString(), 'U+1F0A'+x);
        }
        deck[9] = new Card('diamonds', 10, '10', 'U+1F0AA');
        deck[10] = new Card('diamonds', i, 'jack', 'U+1F0AB');
        deck[11] = new Card('diamonds', i, 'queen', 'U+1F0AD');
        deck[12] = new Card('diamonds', i, 'king', 'U+1F0AE');
        //clubs
        deck[0] = new Card('clubs', 1, 'ace', 'U+1F0A1');
        for(var i = 1; i < 9; i++){
            x = i+1;
            deck[i] = new Card('clubs', x, (x).toString(), 'U+1F0A'+x);
        }
        deck[9] = new Card('clubs', 10, '10', 'U+1F0AA');
        deck[10] = new Card('clubs', i, 'jack', 'U+1F0AB');
        deck[11] = new Card('clubs', i, 'queen', 'U+1F0AD');
        deck[12] = new Card('clubs', i, 'king', 'U+1F0AE');
        self.deck = deck;
    };

    temp();

    // this.deck = temp;
    this.startIndex = 0;

    return this;
}
function Player(name){
    this._name = name;
    this.hand = [];
    this.counter = 0;
}
//instance methods
Deck.prototype.shuffle = function() {
    var temp;
    var num = 10;
    var maxIndex = this.deck.length;
    var minIndex = this.startIndex;
    // console.log(" "+0+" "+maxIndex+" "+minIndex+" "+this.deck[0]._value+" "+this.deck[0]._name+" "+this.deck[0]._type);
    for(var i = minIndex; i <= maxIndex; i++){
        num = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;

        tempVal = this.deck[i];
        tempName = this.deck[i];
        tempType = this.deck[i];

        this.deck[i] = this.deck[num];
        this.deck[i] = this.deck[num];
        this.deck[i] = this.deck[num];

        this.deck[num] = tempVal;
        this.deck[num] = tempName;
        this.deck[num] = tempType;
    }
};
Deck.prototype.reset = function() {
    var reset = new Deck;
    this.deck = reset.deck;
};
Deck.prototype.deal = function() {
    this.startIndex += 1;
    var temp;
    var maxIndex = this.deck.length;
    var minIndex = this.startIndex;
    num = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
    if(this.startIndex < 53){
        temp = this.deck[this.startIndex];
        console.log("startindex is: "+this.startIndex);
        return temp;
    }
    return undefined;
};
Player.prototype.hit = function(deck) {
    this.hand[this.counter] = deck.deal();
    this.counter += 1;
};
Player.prototype.discard = function() {
    //discards a single card which is not returned to the deck
};
