<ul id="v-for-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>

new Vue({
    el: '#v-for-object',
    data: {
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  })


class Money {
    constructor(moneyamount) {
this.moneyamount = moneyamount;
    }
}

class Weapons {
constructor(bonusatk, name) {
    this.bonusatk = bonusatk;
    this.name = name;
    
    }
}

class DreamNeil {
    name = DreamNeil;
}

class SteelSword extends Weapons {
    constructor(bonusatk,name){
        super(bonusatk,name)
        name = SteelSword;
        bonusatk = 5;
    }
}

class IronSword extends Weapons {
    constructor(bonusatk,name){
        super(bonusatk,name)
        name = IronSword;
        bonusatk = 3;
    }
}

class MagicSword extends Weapons {
    constructor(bonusatk,name){
        super(bonusatk,name)
        name = MagicSword;
        bonusatk = 7;
    }
}

class Fenrir extends Weapons {
    constructor(bonusatk,name){
        super(bonusatk,name)
        name = Fenrir;
        bonusatk = 10;
    }
}

