import {AbcCard} from "./abc-card";
import {CatBrief} from "./cat/cat-brief";

export default () => [
  new AbcCard('A', {
    font  : 'font-a',
    class : 'card-a',
    cats: [
      new CatBrief('Abyssinian', [
        require('../../theme/images/abyssinian.jpg')
      ]),
      new CatBrief('American Curl', [
        require('../../theme/images/american-curl.jpg')
      ]),
      new CatBrief('American Shorthair', [
        require('../../theme/images/american-shorthair.jpg')
      ])
    ],
    sound : 'a.mp3'
  }),
  new AbcCard('B', {
    font  : 'font-b',
    class : 'card-b',
    cats: [
      new CatBrief('Balinese', [
        require('../../theme/images/balinese.jpg')
      ]),
      new CatBrief('Bengal', [
        require('../../theme/images/bengal-cats.jpg')
      ]),
      new CatBrief('Birman', [
        require('../../theme/images/birman-cat.jpg'),
        require('../../theme/images/birman-cat-2.jpg')
      ]),
      new CatBrief('British Shorthair', [
        require('../../theme/images/british-shorthair.jpg'),
        require('../../theme/images/british-shorthair-2.jpg')
      ])
    ],
    sound : 'b.mp3'
  }),
  new AbcCard('C', {
    font  : 'font-c',
    class : 'card-c',
    cats: [
      new CatBrief('Chartreus', [
        require('../../theme/images/chartreux.jpg')
      ]),
      new CatBrief('Chinese-li-hua', [
        require('../../theme/images/chinese-li-hua.jpg')
      ]),
      new CatBrief('Cymric', [
        require('../../theme/images/cymric.jpg')
      ])
    ],
    sound : 'c.mp3'
  }),
  new AbcCard('D', {
    font  : 'font-d',
    class : 'card-d',
    cats: [
      new CatBrief('Devon Rex', [
        require('../../theme/images/devon-rex.jpg'),
        require('../../theme/images/devon-rex-2.jpg'),
        require('../../theme/images/devon-rex-3.jpg')
      ])
    ],
    sound : 'd.m4a'
  }),
  new AbcCard('E', {
    font  : 'font-e',
    class : 'card-e',
    cats: [
      new CatBrief('Egyptian Mau', [
        require('../../theme/images/egyptian-mau.jpg')
      ]),
      new CatBrief('European Burmese', [
        require('../../theme/images/european-burmese.jpg'),
        require('../../theme/images/european-burmese-2.jpg')
      ]),
      new CatBrief('Exotic', [
        require('../../theme/images/exotic.jpg'),
        require('../../theme/images/exotic-2.jpg'),
      ])
    ],
    sound : 'e.m4a'
  }),
  new AbcCard('F', {
    font  : 'font-f',
    class : 'card-f',
    cats: [
      new CatBrief('Foldex', [
        require('../../theme/images/foldex-cat.jpg')
      ]),
      new CatBrief('France', [
        require('../../theme/images/france-cat.jpg')
      ])
    ],
    sound : 'f.m4a'
  }),
  new AbcCard('G', {
    font  : 'font-g',
    class : 'card-g',
    cats: [
      new CatBrief('German Rex', [
        require('../../theme/images/german-rex-cat.jpg')
      ])
    ],
    sound : 'g.m4a'
  }),
  new AbcCard('H', {
    font  : 'font-h',
    class : 'card-h',
    cats: [
      new CatBrief('Havana Brown', [
        require('../../theme/images/havana-brown.jpg')
      ]),
      new CatBrief('Himalayan', [
        require('../../theme/images/himalayan.jpg')
      ])
    ],
    sound : 'h.m4a'
  }),
  new AbcCard('I', {
    font  : 'font-i',
    class : 'card-i',
    cats: [
      new CatBrief('Internet', [
        require('../../theme/images/internet-cat.jpg')
      ])
    ],
    sound : 'i.m4a'
  }),
  new AbcCard('J', {
    font  : 'font-j',
    class : 'card-j',
    cats: [
      new CatBrief('Japanese Bobtail', [
        require('../../theme/images/japanese-bobtail.jpg')
      ]),
      new CatBrief('Javanese', [
        require('../../theme/images/javanese.jpg')
      ])
    ],
    sound : 'j.m4a'
  }),
  new AbcCard('K', {
    font  : 'font-k',
    class : 'card-k',
    cats: [
      new CatBrief('Khao Manee', [
        require('../../theme/images/khao-manee.jpg')
      ]),
      new CatBrief('Kuril Islands Bobtail', [
        require('../../theme/images/kuril-islands-bobtail.jpg')
      ])
    ],
    sound : 'k.mp3'
  }),
  new AbcCard('L', {
    font  : 'font-l',
    class : 'card-l',
    cats: [
      new CatBrief('La Perm', [
        require('../../theme/images/la-perm.jpg')
      ])
    ],
    sound : 'l.mp3'
  }),
  new AbcCard('M', {
    font  : 'font-m',
    class : 'card-m',
    cats: [
      new CatBrief('Maine Coon', [
        require('../../theme/images/maine-coon.jpg')
      ]),
      new CatBrief('Manx', [
        require('../../theme/images/manx.jpg')
      ])
    ],
    sound : 'm.mp3'
  }),
  new AbcCard('N', {
    font  : 'font-n',
    class : 'card-n',
    cats: [
      new CatBrief('Nebelung', [
        require('../../theme/images/nebelung-cat.jpg')
      ]),
      new CatBrief('Norwegian Forest', [
        require('../../theme/images/norwegian-forest-cat.jpg')
      ])
    ],
    sound : 'n.mp3'
  }),
  new AbcCard('O', {
    font  : 'font-o',
    class : 'card-o',
    cats: [
      new CatBrief('Oriental Shorthair', [
        require('../../theme/images/oriental-shorthair.jpg'),
        require('../../theme/images/oriental-shorthair-2.jpg')
      ])
    ],
    sound : 'o.mp3'
  }),
  new AbcCard('P', {
    font  : 'font-p',
    class : 'card-p',
    cats: [
      new CatBrief('Persian', [
        require('../../theme/images/persian.jpg')
      ])
    ],
    sound : 'p.mp3'
  }),
  new AbcCard('Q', {
    font  : 'font-q',
    class : 'card-q',
    cats: [
      new CatBrief('Quest', [
        require('../../theme/images/questcat.jpg')
      ])
    ],
    sound : 'q.mp3'
  }),
  new AbcCard('R', {
    font  : 'font-r',
    class : 'card-r',
    cats: [
      new CatBrief('Ragamuffin', [
        require('../../theme/images/ragamuffin.jpg')
      ]),
      new CatBrief('Ragdoll', [
        require('../../theme/images/ragdoll.jpg')
      ])
    ],
    sound : 'r.mp3'
  }),
  new AbcCard('S', {
    font  : 'font-s',
    class : 'card-s',
    cats: [
      new CatBrief('Siamese', [
        require('../../theme/images/siamese.jpg')
      ]),
      new CatBrief('Singapura', [
        require('../../theme/images/singapura.jpg')
      ]),
      new CatBrief('Sphynx', [
        require('../../theme/images/sphynx.jpg')
      ])
    ],
    sound : 's.mp3'
  }),
  new AbcCard('T', {
    font  : 'font-t',
    class : 'card-t',
    cats: [
      new CatBrief('Thai', [
        require('../../theme/images/thai.jpg'),
        require('../../theme/images/thai-2.jpg')
      ]),
      new CatBrief('Tonkinese', [
        require('../../theme/images/tonkinese.jpg')
      ])
    ],
    sound : 't.mp3'
  }),
  new AbcCard('U', {
    font  : 'font-u',
    class : 'card-u',
    cats: [
      new CatBrief('Ukrainian Levkoy', [
        require('../../theme/images/ukrainian-levkoy.jpg')
      ])
    ],
    sound : 'u.mp3'
  }),
  new AbcCard('V', {
    font  : 'font-v',
    class : 'card-v',
    cats: [
      new CatBrief('Vendetta', [
        require('../../theme/images/vendettacat.jpg')
      ])
    ],
    sound : 'v.mp3'
  }),
  new AbcCard('W', {
    font  : 'font-w',
    class : 'card-w',
    cats: [
      new CatBrief('Wild', [
        require('../../theme/images/wildcat-animal-nature-cat-natural-animals-ears.jpg')
      ])
    ],
    sound : 'w.mp3'
  }),
  new AbcCard('X', {
    font  : 'font-x',
    class : 'card-x',
    cats: [
      new CatBrief('Xman', [
        require('../../theme/images/xman.jpg')
      ])
    ],
    sound : 'x.mp3'
  }),
  new AbcCard('Y', {
    font  : 'font-y',
    class : 'card-y',
    cats: [
      new CatBrief('Yellow', [
        require('../../theme/images/yellowcat.jpg')
      ])
    ],
    sound : 'y.mp3'
  }),
  new AbcCard('Z', {
    font  : 'font-z',
    class : 'card-z',
    cats: [
      new CatBrief('Zzz Sleep', [
        require('../../theme/images/zzzsleepcat.jpg')
      ])
    ],
    sound : 'z.mp3'
  }),
];
