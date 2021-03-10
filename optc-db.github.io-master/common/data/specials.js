window.specials = {
    13: {
        delay: function(p) { return 1; },
    },
    14: {
        delay: function(p) { return 1; },
    },
    15: {
        delay: function(p) { return 1; },
    },
    16: {
        delay: function(p) { return 1; },
    },
    18: {
        def: function(p) { return 0.5; }
    },
    24: {
        def: function(p) { return 0.5; }
    },
    34: {
        def: function(p) { return 0; }
    },
    127: {
        def: function(p) { return 0.5; }
    },
    137: {
        def: function(p) { return 0.5; }
    },
    148: {
        def: function(p) { return 0.5; }
    },
    158: {
        def: function(p) { return 0.5; }
    },
    204: {
        delay: function(p) { return 1; },
    },
    206: {
        def: function(p) { return 0.5; }
    },
    209: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    210: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        type: "type"
    },
    222: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    223: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        type: "type"
    },
    248: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        type: "type" 
    },
    249: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        type: "type" 
    },
    263: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    267: {
        def: function(p) { return 0.5; }
    },
    275: {
        def: function(p) { return 0.5; }
    },
    285: {
        def: function(p) { return 0.5; }
    },
    295: {
        def: function(p) { return 0.5; }
    },
    305: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },	
    },
    306: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },	
    },
    309: {
        def: function(p) { return 0.5; }
    },
    310: {
        def: function(p) { return 0.5; }
    },
    313: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    314: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    323: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    324: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    352: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class"
    },
    353: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class"
    },
    382: {
        def: function(p) { return 0.5; }
    },
    385: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: "class"
    },
    386: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: "class"
    },
    391: {
        def: function(p) { return 0.2; }
    },
    392: {
        def: function(p) { return 0.2; }
    },
    395: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    396: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    399: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        type: "type"
    },
    400: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        type: "type"
    },
    401: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: "class"
    },
    402: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: "class"
    },
    404: {
        rcv: function(p) { return 2; }
    },
    405: {
        rcv: function(p) { return 2; }
    },
    406: {
        atk: function(p) { return 1.2; },
        type: "type"
    },
    415: {
        delay: function(p) { return 1; },
    },
    416: {
        delay: function(p) { return 1; },
    },
    417: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    418: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    419: {
        def: function(p) { return 0.5; }
    },
    423: {
        def: function(p) { return 0.5; }
    },
    424: {
        def: function(p) { return 0.5; }
    },
    426: {
        atk: function(p) { return p.unit.type == "STR" ? 1.05 : 1; },
        type: "type"
    },
    429: {
        def: function(p) { return 0.5; }
    },
    430: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    431: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    434: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    450: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    451: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    454: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        type: "type"
    },
    455: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        type: "type"
    },
    458: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    459: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    460: {
        delay: function(p) { return 1; },
    },
    461: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: "class"
    },
    462: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: "class"
    },
    465: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    466: {
        delay: function(p) { return 1; },
    },
    468: {
        rcv: function(p) { return 1.5; }
    },
    470: {
        rcv: function(p) { return 1.5; }
    },
    487: {
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: "type"
    },
    488: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: "type"
    },
    489: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: "type"
    },
    490: {
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: "type"
    },
    491: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: "type"
    },
    492: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: "type"
    },
    499: {
        delay: function(p) { return 1; },
    },
    500: {
        delay: function(p) { return 1; },
    },
    505: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: "type"
    },
    506: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: "type"
    },
    509: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    510: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    511: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: "class"
    },
    514: {
        def: function(p) { return 0.5; },
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    517: {
        atk: function(p) { return 1.05; },
        type: "type"
    },
    518: {
        atk: function(p) { return 1.05; },
        type: "type"
    },
    519: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type"
    },
    520: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type"
    },
    529: {
        def: function(p) { return 0; }
    },
    530: {
        def: function(p) { return 0; }
    },
    533: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    534: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    542: {
        rcv: function(p) { return 2; }
    },
    545: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    546: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    549: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    550: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    552: {
        def: function(p) { return 0; }
    },
    555: {
        delay: function(p) { return 1; },
    },
    556: {
        delay: function(p) { return 1; },
    },
    559: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    560: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    568: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.5; }
    },
    569: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.5; }
    },
    572: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        type: "class",
        onActivation: function(p) { p.tdata.lock = Math.max(1, p.tdata.lock); },
        onDeactivation: function(p) { if (p.tdata.lock == 1) p.tdata.lock = 0; }
    },
    574: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    575: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    576: {
        rcv: function(p) { return 1.5; }
    },
    582: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        type: "type"
    },
    583: {
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 300: 0; },
    },
    589: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class"
    },
    590: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class"
    },
    596: {
        def: function(p) { return 0.5; }
    },
    597: {
        def: function(p) { return 0.5; }
    },
    600: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        type: "type"
    },
    601: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        type: "type"
    },
    602: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
    603: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
    612: {
        atkStatic: function(p) { return 45; },
        rcvStatic: function(p) { return 45; },
        type: "type"
    },
    613: {
        atkStatic: function(p) { return 45; },
        rcvStatic: function(p) { return 45; },
        type: "type"
    },
    614: {
        def: function(p) { return 0.5; }
    },
    617: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
        type: "class"
    },
    622: {
        rcvStatic: function(p) { return 100; },
        type: "type"
    },
    632: {
        def: function(p) { return 0.5; }
    },
    633: {
        def: function(p) { return 0.5; }
    },
    634: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.2 : 1; },
        type: "type"
    },
    635: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.2 : 1; },
        type: "type"
    },
    637: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has a defense buff active."
    },
    642: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    643: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    644: {
        atk: function(p) { return p.delayed > 0 ? 1.2 : 1; },
        type: "condition",
    },
    645: {
        atk: function(p) { return p.delayed > 0 ? 1.2 : 1; },
        type: "condition",
    },
    648: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    649: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    650: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    651: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    655: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    656: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    660: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.5; }
    },
    661: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.5; }
    },
    665: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    666: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    668: {
        atk: function(p) { return !p.unit.class.has('Free Spirit') ? 1 : window.specials[668].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[668].multiplier == 1.5 ? 1 : 0);
            window.specials[668].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '668warning'
            });
        }
    },
    669: {
        atk: function(p) { return !p.unit.class.has('Free Spirit') ? 1 : window.specials[669].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[669].multiplier == 1.5 ? 1 : 0);
            window.specials[669].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '669warning'
            });
        }
    },
    670: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    671: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    680: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        type: "type"
    },
    681: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        type: "type"
    },
    686: {
        delay: function(p) { return 1; },
    },
    687: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.3 : 1; },
        type: "class"
    },
    688: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.3 : 1; },
        type: "class"
    },
    689: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    690: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    710: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
        type: "class"
    },
    711: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
        type: "class"
    },
    712: {
        atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
        type: "class"
    },
    713: {
        atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
        type: "class"
    },
    715: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    716: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    719: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? window.specials[719].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2 : 1.5);
            window.specials[719].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
                name: '719warning'
            });
        }
    },
    720: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? window.specials[720].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2 : 1.5);
            window.specials[720].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
                name: '720warning'
            });
        }
    },
    727: {
        def: function(p) { return 0.5; }
    },
    730: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    731: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    732: {
        def: function(p) { return 0.5; }
    },
    733: {
        def: function(p) { return 0.5; }
    },
    740: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has a defense buff active."
    },
    741: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has a defense buff active."
    },
    742: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    743: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    753: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    754: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    755: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    756: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    761: {
        atk: function(p) { return 1.2; },
        type: "type"
    },
    762: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "type"
    },
    766: {
        delay: function(p) { return 1; },
    },
    770: {
        atk: function(p) { return p.delayed > 0 ? 1.3 : 1; },
        type: "condition",
    },
    771: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "type"
    },
    780: {
        atk: function(p) { return p.slot == p.sourceSlot ? window.specials[780].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
            window.specials[780].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x Self Attack boost.',
                name: '780warning'
            });
        }
    },
    781: {
        atk: function(p) { return p.slot == p.sourceSlot ? window.specials[781].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
            window.specials[781].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x Self Attack boost.',
                name: '781warning'
            });
        }
    },
    782: {
        delay: function(p) { return 1; },
    },
    783: {
        delay: function(p) { return 1; },
    },
    786: {
        delay: function(p) { return 1; },
    },
    787: {
        delay: function(p) { return 1; },
    },
    788: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class"
    },
    789: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class"
    },
    790: {
        atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.2 : 1; },
        type: "type"
    },
    791: {
        atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.2 : 1; },
        type: "type"
    },
    794: {
        delay: function(p) { return 1; },
    },
    795: {
        delay: function(p) { return 1; },
    },
    796: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    797: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    798: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    803: {
        atk: function(p) { return 1.1; },
        type: "type"
    },
    804: {
        atk: function(p) { return 1.1; },
        type: "type"
    },
    805: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    806: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    807: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    808: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    809: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        def: function(p) { return 0.2; }
    },
    810: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        def: function(p) { return 0.2; }
    },
    813: {
        delay: function(p) { return 1; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    822: {
        rcvStatic: function(p) { return 100; },
        type: "type"
    },
    825: {
        atkStatic: function(p) { return 200; },
        type: "type"
    },
    826: {
        delay: function(p) { return 1; },
        atk: function(p) { return 0.2; },
        type: "type"
    },
    827: {
        atk: function(p) { return 1.05; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been poisoned or STRONGLY Poisoned."
    },
    828: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? window.specials[828].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP < 20 ? 1.75 : 1);
            window.specials[828].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below' : 'above') + ' 20%, using the ' + n + 'x multiplier.',
                name: '828warning'
            });
        }  
    },
    829: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? window.specials[829].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP < 20 ? 1.75 : 1);
            window.specials[829].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below' : 'above') + ' 20%, using the ' + n + 'x multiplier.',
                name: '829warning'
            });
        }
    },
    832: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    833: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    835: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    836: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    837: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    838: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    839: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    840: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    841: {
        delay: function(p) { return 1; },
        atk: function(p) { return p.delayed > 0 ? 1.25 : 1; },
        type: "condition",
    },
    842: {
        delay: function(p) { return 1; },
        atk: function(p) { return p.delayed > 0 ? 1.25 : 1; },
        type: "condition",
    },
    843: {
        atk: function(p) {
            if (window.specials[843].first) return p.unit.class.has("Shooter") ? 1.5 : 1;
            else return p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 1.5 : 1;
        },
        type: "class",
        onActivation: function(p) {
            window.specials[843].first = !window.specials[843].first;
            p.scope.notify({
                text: (window.specials[843].first ?
                    'Boosting Shooters. To switch to the second multiplier, disable and re-enable this special' :
                    'Boosting Shooters, Slashers and Strikers. To switch to the first multiplier, disable and re-enable this special'),
                name: '843warning'
            });
        }
    },
    844: {
        atk: function(p) {
            if (window.specials[844].first) return p.unit.class.has("Shooter") ? 1.5 : 1;
            else return p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 1.5 : 1;
        },
        type: "class",
        onActivation: function(p) {
            window.specials[844].first = !window.specials[844].first;
            p.scope.notify({
                text: (window.specials[844].first ?
                    'Boosting Shooters. To switch to the second multiplier, disable and re-enable this special' :
                    'Boosting Shooters, Slashers and Strikers. To switch to the first multiplier, disable and re-enable this special'),
                name: '844warning'
            });
        }
    },
    847: {
        atk: function(p) { return 1.05; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.15, [p.friendCaptain, p.captain], p.effectName); },
        type: "class"
    },
    848: {
        atk: function(p) { return 1.05; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.15, [p.friendCaptain, p.captain], p.effectName); },
        type: "class"
    },
    849: {
        def: function() { return 0.5; }
    },
    853: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "class"
    },
    857: {
        rcv: function(p) { return p.unit.type == 'PSY' ? 1.5 : 1; },
        type: "type"
    },
    858: {
        rcv: function(p) { return p.unit.type == 'PSY' ? 1.5 : 1; },
        type: "type"
    },
    861: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    862: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    863: {
        def: function(p) { return 0.5; }
    },
    864: {
        delay: function(p) { return 1; },
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    865: {
        delay: function(p) { return 1; },
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    866: {
        atk: function(p) {
            return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.3 : 1;
        },
        type: "class"
    },
    867: {
        delay: function(p) { return 1; },
    },
    869: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.0, [p.friendCaptain, p.captain], p.effectName); }
    },
    870: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.0, [p.friendCaptain, p.captain], p.effectName); }
    },
    873: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[873].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[873].multiplier == 1.5 ? 1 : 0);
            window.specials[873].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x Orb boost. To switch to the ' + [1.75, 1.5][n] + 'x Orb boost, disable and re-enable this special',
                name: '873warning'
            });
        }
    },
    874: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[874].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[874].multiplier == 1.5 ? 1 : 0);
            window.specials[874].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x Orb boost. To switch to the ' + [1.75, 1.5][n] + 'x Orb boost, disable and re-enable this special',
                name: '874warning'
            });
        }
    },
    881: {
        atk: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        rcv: function(p) { return 0.1; },
        type: "class"
    },
    882: {
        atk: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        rcv: function(p) { return 0.1; },
        type: "class"
    },
    883: {
        atk: function(p) { return !p.unit.class.has('Powerhouse') ? 1 : window.specials[883].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[883].multiplier == 1.5 ? 1 : 0);
            window.specials[883].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '883warning'
            });
        }
    },
    884: {
        atk: function(p) { return !p.unit.class.has('Powerhouse') ? 1 : window.specials[884].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[884].multiplier == 1.5 ? 1 : 0);
            window.specials[884].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '884warning'
            });
        }
    },
    885: {
        atk: function(p) { return p.unit.class.has('Fighter') ? window.specials[885].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 1.5 : 1);
            window.specials[885].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x ATK boost.',
                name: '885warning'
            });
        }
    },
    886: {
        atk: function(p) { return p.unit.class.has('Slasher') ? window.specials[886].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 1.5 : 1);
            window.specials[886].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x ATK boost.',
                name: '886warning'
            });
        }
    },
    887: {
        def: function(p) { return 0.2; }
    },
    891: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
        type: "class"
    },
    902: {
        atk: function(p) { return !p.unit.class.has('Powerhouse') ? 1 : window.specials[902].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[902].multiplier == 1.5 ? 1 : 0);
            window.specials[902].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '902warning'
            });
        }
    },
    903: {
        atk: function(p) { return !p.unit.class.has('Powerhouse') ? 1 : window.specials[903].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[903].multiplier == 1.5 ? 1 : 0);
            window.specials[903].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '902warning'
            });
        }
    },
    904: {
        delay: function(p) { return 1; },
    },
    905: {
        atk: function(p) {
            if (!window.specials[905].stage) return p.slot == p.sourceSlot ? 1.5 : 1;
            if (window.specials[905].stage == 1) return p.unit.class.has("Slasher") ? 1.5 : 1;
            if (window.specials[905].stage == 2) return p.unit.class.has("Slasher") ? 1.75 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[905].stage = (window.specials[905].stage + 1) % 3;
            p.scope.notify({
                text: 'Activating stage #' + (window.specials[905].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
                name: '905warning'
            });
        }
    },
    906: {
        atk: function(p) {
            if (!window.specials[906].stage) return p.slot == p.sourceSlot ? 1.5 : 1;
            if (window.specials[906].stage == 1) return p.unit.class.has("Slasher") ? 1.5 : 1;
            if (window.specials[906].stage == 2) return p.unit.class.has("Slasher") ? 1.75 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[906].stage = (window.specials[906].stage + 1) % 3;
            p.scope.notify({
                text: 'Activating stage #' + (window.specials[906].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
                name: '906warning'
            });
        }
    },
    907: {
        delay: function(p) { return 1; },
    },
    908: {
        delay: function(p) { return 1; },
    },
    909: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    910: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    911: {
        atk: function(p) {
            if (!window.specials[911].stage) return p.unit.class.has("Powerhouse") ? 1.2 : 1;
            if (window.specials[911].stage == 1) return p.unit.class.has("Powerhouse") ? 2 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[911].stage = (window.specials[911].stage + 1) % 2;
            p.scope.notify({
                text: 'Activating stage #' + (window.specials[911].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
                name: '911warning'
            });
        }
    },
    912: {
        atk: function(p) {
            if (!window.specials[912].stage) return p.unit.class.has("Powerhouse") ? 1.2 : 1;
            if (window.specials[912].stage == 1) return p.unit.class.has("Powerhouse") ? 2 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[912].stage = (window.specials[912].stage + 1) % 2;
            p.scope.notify({
                text: 'Activating stage #' + (window.specials[912].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
                name: '912warning'
            });
        }
    },
    915: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        type: "class"
    },
    916: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        type: "class"
    },
    917: {
        delay: function(p) { return 1; },
    },
    918: {
        delay: function(p) { return 1; },
    },
    921: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    922: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    925: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    926: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    927: {
        atk: function(p) {
            return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.2 : 1;
        },
        type: "class"
    },
    928: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been poisoned or STRONGLY Poisoned."
    },
    929: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been poisoned or STRONGLY Poisoned."
    },
    940: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
        type: "type"
    },
    941: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
        type: "type"
    },
    944: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        type: "class"
    },
    945: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        type: "class"
    },
    947: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.3 : 1; },
        type: "type"
    },
    954: {
        def: function(p) { return 0.2; }		
    },
    955: {
        atk: function(p) { return p.defenseDown ? 1.2 : 1; },
        type: "condition"
    },
    956: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
        type: "class"
    },
    961: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    963: {
        def: function(p) { return 0; }
    },
    964: {
        atk: function(p) { return window.specials[964].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[964].multiplier == 1.1 ? 1 : 0);
            window.specials[964].multiplier = [1.1, 1.5][n];
            p.scope.notify({
                text: 'Using the ' + [1.1, 1.5][n] + 'x ATK multiplier. To switch to the ' + [1.5, 1.1][n] + 'x multiplier, disable and re-enable this special',
                name: '965warning'
            });
        }
    },
    965: {
        atk: function(p) { return window.specials[965].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[965].multiplier == 1.1 ? 1 : 0);
            window.specials[965].multiplier = [1.1, 1.5][n];
            p.scope.notify({
                text: 'Using the ' + [1.1, 1.5][n] + 'x ATK multiplier. To switch to the ' + [1.5, 1.1][n] + 'x multiplier, disable and re-enable this special',
                name: '965warning'
            });
        }
    },
    975: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Striker")) ? 1.3 : 1; },
        type: "class"
    },
    976: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Striker")) ? 1.3 : 1; },
        type: "class"
    },
    977: {
        chainAddition: function(p) { return 0.5; }
    },
    978: {
        chainAddition: function(p) { return 0.5; }
    },
    984: {
        delay: function(p) { return 1; },
    },
    981: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    998: {
        delay: function(p) { return 1; },
    },
    999: {
        delay: function(p) { return 1; },
    },
    1005: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1006: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1010: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.3 : 1; },
        type: "type"
    },
    1011: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.3 : 1; },
        type: "type"
    },
    1013: {
        atk: function(p) { return p.delayed > 0 ? 1.2 : 1; },
        type: "condition",
    },
    1015: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    1016: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    1017: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1},
        type: "class"
    },
    1018: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1},
        type: "class"
    },
    1023: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1},
        type: "class"
    },
    1024: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1024].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP >= 70 ? 1.25 : p.percHP >= 30 ? 1.5 : 1.75);
            window.specials[1024].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below 30%' : n == 1.5 ? 'between 70% and 30%' : 'above 70%') + ', using the ' + n + 'x Orb boost.',
                name: '1024warning'
            });
        }
    },
    1025: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1025].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP >= 70 ? 1.25 : p.percHP >= 30 ? 1.5 : 1.75);
            window.specials[1025].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below 30%' : n == 1.5 ? 'between 70% and 30%' : 'above 70%') + ', using the ' + n + 'x Orb boost.',
                name: '1025warning'
            });
        }
    },
    1028: {
        //TODO
        hit: function(n,p) { return n > 30 ? 1.75 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '1028warning'
            });
        }
    },
    1029: {
        //TODO
        hit: function(n,p) { return n > 30 ? 1.75 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '1029warning'
            });
        }
    },
    1030: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    1031: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    1040: {
        atk: function(p) { return window.specials[1040].multiplier; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 1.5 : 1);
            window.specials[1040].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x ATK boost.',
                name: '1040warning'
            });
        }
    },
    1041: {
        atk: function(p) { return window.specials[1041].multiplier; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 1.5 : 1);
            window.specials[1041].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x ATK boost.',
                name: '1041warning'
            });
        }
    },
    1046: {
        staticMult: function(p) { return 55; }
    },
    1047: {
        staticMult: function(p) { return 55; }
    },
    1055: {
        atk: function(p) { return 1.4; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been STRONGLY Poisoned."
    },
    1056: {
        atk: function(p) { return 1.4; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been STRONGLY Poisoned."
    },
    1059: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1060: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1061: {
        chain: function(p) { return 2; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2 : 1;
        }
    },
    1063: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.3 : 1},
        type: "class"
    },
    1065: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    1066: {
        chainAddition: function(p) { return 0.1;}
    },
    1067: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type"
    },
    1071: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1},
        type: "class"
    },
    1072: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1},
        type: "class"
    },
    1076: {
        delay: function(p) { return 1; },
    },
    1077: {
        delay: function(p) { return 1; },
    },
    1080: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1081: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1082: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Fighter")) ? window.specials[1082].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 70 ? 1.2 : p.percHP >= 30 ? 1.5 : 1.75);
            window.specials[1082].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below 30%' : n == 1.5 ? 'between 70% and 30%' : 'above 70%') + ', using the ' + n + 'x Attack boost.',
                name: '1082warning'
            });
        }
    },
    1083: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Fighter")) ? window.specials[1083].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 70 ? 1.2 : p.percHP >= 30 ? 1.5 : 1.75);
            window.specials[1083].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below 30%' : n == 1.5 ? 'between 70% and 30%' : 'above 70%') + ', using the ' + n + 'x Attack boost.',
                name: '1083warning'
            });
        }
    },
    1086: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1087: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1088: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1},
        type: "class"
    },
    1089: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1},
        type: "class"
    },
    1096: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1097: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1099: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1100: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1101: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.75 : 1; },
        type: "type"
    },
    1102: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.75 : 1; },
        type: "type"
    },
    1105: {
        delay: function(p) { return 1; },
        chainAddition: function(p) { return 0.2;}
    },
    1106: {
        delay: function(p) { return 1; },
        chainAddition: function(p) { return 0.2;}
    },
    1107: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    1108: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    1111: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    1112: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    1113: {
        atk: function(p) { return 1.2; },
        type: "type"
    },
    1114: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type" 
    },
    1115: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type" 
    },
    1122: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)}
    },
    1123: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)}
    },
    1132: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Shooter")  ? window.specials[1132].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1132].multiplier == 1.5 ? 1 : 0);
            window.specials[1132].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '1132warning'
            });
        }
    },
    1133: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Shooter") ? window.specials[1133].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1133].multiplier == 1.5 ? 1 : 0);
            window.specials[1133].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '1133warning'
            });
        }
    },
    1137: {
        orb: function(p) { return p.unit.class.has("Free Spirit") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1138: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 1.3 : 1},
        type: "class"
    },
    1142: {
        delay: function(p) { return 1; },
    },
    1143: {
        delay: function(p) { return 1; },
    },
    1153: {
        def: function(p) { return 0; },
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1},
        type: "class" 
    },
    1154: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1},
        type: "class"
    },
    1164: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        rcv: function(p) { return 1.5; }
    },
    1165: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        rcv: function(p) { return 1.5; }
    },
    1168: {
        atk: function(p) { return p.unit.type == "STR" ? window.specials[1168].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 10 ? 1.75 : p.percHP <= 30 ? 1.5 : p.percHP <= 50 ? 1.25 : 1.1);
            window.specials[1168].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below' : 'above') + ' ' + (n == 1.75 ? '10%' : n == 1.5 ? '10%' : n == 1.25 ? '30%' : '50%') + ', using the ' + n + 'x multiplier.',
                name: '1168warning'
            });
        }
    },
    1169: {
        atk: function(p) { return p.unit.type == "STR" ? window.specials[1169].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 10 ? 1.75 : p.percHP <= 30 ? 1.5 : p.percHP <= 50 ? 1.25 : 1.1);
            window.specials[1169].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below' : 'above') + ' ' + (n == 1.75 ? '10%' : n == 1.5 ? '10%' : n == 1.25 ? '30%' : '50%') + ', using the ' + n + 'x multiplier.',
                name: '1168warning'
            });
        }
    },
    1181: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1181].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1181].turnedOn = false;
        }
    },
    1182: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1182].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1182].turnedOn = false;
        }
    },
    1193: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1194: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1195: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    1196: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    1209: {
        delay: function(p) { return 1; },
    },
    1210: {
        delay: function(p) { return 1; },
    },
    1211: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1212: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1219: {
        atk: function(p) {
            if (!window.specials[1219].stage) return p.unit.class.has("Shooter") ? 1.2 : 1;
            if (window.specials[1219].stage == 1) return p.unit.class.has("Shooter") ? 1.5 : 1;
            if (window.specials[1219].stage == 2) return p.unit.class.has("Shooter") ? 2 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[1219].stage = (window.specials[1219].stage + 1) % 3;
            p.scope.notify({
                text: 'Activating stage #' + (window.specials[1219].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
                name: '1219warning'
            });
        }
    },
    1220: {
        atk: function(p) {
            if (!window.specials[1220].stage) return p.unit.class.has("Shooter") ? 1.2 : 1;
            if (window.specials[1220].stage == 1) return p.unit.class.has("Shooter") ? 1.5 : 1;
            if (window.specials[1220].stage == 2) return p.unit.class.has("Shooter") ? 2 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[1220].stage = (window.specials[1220].stage + 1) % 3;
            p.scope.notify({
                text: 'Activating stage #' + (window.specials[1220].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
                name: '1220warning'
            });
        }
    },
    1221: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1221].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1221].turnedOn = false;
        }
    },
    1222: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1222].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1222].turnedOn = false;
        }
    },
    1225: {
        delay: function(p) { return 1; },
    },
    1227: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1231: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1231].turnedOn = true;
            p.scope.notify({
                text: 'Only affects captain damage if Smoker is your captain, use Friend Captain if you don\'t want the additional ATK boost due to Captain Swap',
                name: '1231warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1231].turnedOn = false;
        }
    },
    1232: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1232].turnedOn = true;
            p.scope.notify({
                text: 'Only affects captain damage if Smoker is your captain, use Friend Captain if you don\'t want the additional ATK boost due to Captain Swap',
                name: '1232warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1232].turnedOn = false;
        }
    },
    1233: {//Tashigi
        affinity: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1234: {//Tashigi
        affinity: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1235: {
        delay: function(p) { return 1; },
    },
    1236: {
        delay: function(p) { return 1; },
    },
    1237: {
        //TODO
        hit: function(n,p) { return n > 30 ? 2 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '1237warning'
            });
        }
    },
    1238: {
        //TODO
        hit: function(n,p) { return n > 30 ? 2 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '1238warning'
            });
        }
    },
    1239: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[1239].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Kizaru is your captain',
                name: '1239warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1239].turnedOn[p.slot] = false;
        }
    },
    1240: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[1240].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Kizaru is your captain',
                name: '1240warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1240].turnedOn[p.slot] = false;
        }
    },
    1241: {
        staticMult: function(p) { return 15; }
    },
    1242: {
        staticMult: function(p) { return 15; }
    },
    1245: {
        atk: function(p) { return !p.unit.class.has('Fighter') ? 1 : window.specials[1245].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1245].multiplier == 1.3 ? 1 : 0);
            window.specials[1245].multiplier = [1.3, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.3, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.3][n] + 'x multiplier, disable and re-enable this special',
                name: '1245warning'
            });
        }
    },
    1246: {
        atk: function(p) { return !p.unit.class.has('Fighter') ? 1 : window.specials[1246].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1246].multiplier == 1.3 ? 1 : 0);
            window.specials[1246].multiplier = [1.3, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.3, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.3][n] + 'x multiplier, disable and re-enable this special',
                name: '1246warning'
            });
        }
    },
    1247: {
        atk: function(p) { return !p.unit.class.has('Fighter') ? 1 : window.specials[1247].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1247].multiplier == 1.3 ? 1 : 0);
            window.specials[1247].multiplier = [1.3, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.3, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.3][n] + 'x multiplier, disable and re-enable this special',
                name: '1247warning'
            });
        }
    },
    1250: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        type: "class"
    },
    1251: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        type: "class"
    },
    1253: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        type: "class"
    },
    1254: {
        def: function(p) { return 0.2; }
    },
    1255: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1256: {
        atk: function(p) { return 1.3 },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has a defense buff active."
    },
    1259: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1259].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1259].turnedOn = false;
        }
    },
    1260: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1260].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1260].turnedOn = false;
        }
    },
    1261: {//Young Senor Pink
        affinity: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1262: {//Young Senor Pink
        affinity: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1263: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1264: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1265: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
        type: "class"
    },
    1266: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
        type: "class"
    },
    1269: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1269].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1269].turnedOn = false;
        }
    },
    1270: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1270].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1270].turnedOn = false;
        }
    },
    1271: {
        orb: function(p) { return p.unit.class.has("Shooter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1272: {
        orb: function(p) { return p.unit.class.has("Shooter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1273: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    1274: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    1282: {
        atk: function(p) { return 1.2; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.2, [p.friendCaptain, p.captain], p.effectName); },
    },
    1283: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        type: "class"
    },
    1286: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        type: "class"
    },
    1287: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        type: "class"
    },
    1295: {
        def: function(p) { return 0; }
    },
    1296: {
        def: function(p) { return 0; }
    },
    1297: {
        affinity: function(p) { return p.unit.type == "STR" ? 1.75 : 1; }
    },
    1298: {
        affinity: function(p) { return p.unit.type == "STR" ? 1.75 : 1; }
    },
    1299: {
        atk: function(p) { return p.unit.type == "INT" ? 1.75 : 1; },
        type: "class"
    },
    1300: {
        atk: function(p) { return p.unit.type == "INT" ? 1.75 : 1; },
        type: "class"
    },
    1313: {
        atk: function(p) { return p.unit.cost >= 50 ? 1.75 : 1; },
        type: "class"
    },
    1314: {
        atk: function(p) { return p.unit.cost >= 50 ? 1.75 : 1; },
        type: "class"
    },
    1317: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.2; }
    },
    1318: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.2; }
    },
    1319: {
        atk: function(p) { return 1.5; },
        type: "class"
    },
    1320: {
        atk: function(p) { return 1.5; },
        type: "class"
    },
    1321: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
    },
    1322: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
    },
    1323: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1323].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1323].turnedOn = false;
        }
    },
    1324: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1324].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1324].turnedOn = false;
        }
    },
    1329: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.25 : 1; }
    },
    1330: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1330].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1330].turnedOn = false;
        }
    },
    1335: {
        chainAddition: function(p) { return 0.5; }
    },
    1336: {
        chainAddition: function(p) { return 0.5; }
    },
    1339: {
        chainAddition: function(p) {
            if (!window.specials[1339].stage) return 0.2;
            if (window.specials[1339].stage == 1) return 0.3;
            if (window.specials[1339].stage == 2) return 0.5;
        },
        stage: -1,
        onActivation: function(p) {
            window.specials[1339].stage = (window.specials[1339].stage + 1) % 3;
            p.scope.notify({
                text: 'Activating stage #' + (window.specials[1339].stage + 1) + '. To move onto the next stage, disable and re-enable this special.',
                name: '1339warning'
            });
        }
    },
    1340: {
        delay: function(p) { return 1; },
    },
    1341: {
        delay: function(p) { return 1; },
    },
    1343: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    1344: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.3 : 1; },
        type: "class"
    },
    1348: {
        atk: function(p) { return 1.2; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.2, [p.friendCaptain, p.captain], p.effectName); },
    },
    1349: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
        type: "class"
    },
    1351: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.5; }
    },
    1353: {
        chainAddition: function(p) { return 0.5; }
    },
    1354: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    1355: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    1358: {
        delay: function(p) { return 1; },
        rcv: function(p) { return 1.75; }
    },
    1359: {
        delay: function(p) { return 1; },
        rcv: function(p) { return 1.75; }
    },
    1361: {
        atk: function(p) { return !p.unit.class.has('Slasher') ? 1 : p.sourceSlot < 2 ? 2 : 1.75 ; },
        type: "class",
    },
    1362: {
        atk: function(p) { return !p.unit.class.has('Slasher') ? 1 : p.sourceSlot < 2 ? 2 : 1.75 ; },
        type: "class",
    },
    1363: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },	
    },
    1364: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },	
    },
    1365: {
        delay: function(p) { return 1; },
    },
    1366: {
        delay: function(p) { return 1; },
    },
    1367:{
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1367].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[1367].multiplier == 1.5 ? 1 : 0);
            window.specials[1367].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x Orb boost. To switch to the ' + [1.75, 1.5][n] + 'x Orb boost, disable and re-enable this special',
                name: '1367warning'
            });
        },
    },
    1368:{
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1368].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[1368].multiplier == 1.5 ? 1 : 0);
            window.specials[1368].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x Orb boost. To switch to the ' + [1.75, 1.5][n] + 'x Orb boost, disable and re-enable this special',
                name: '1368warning'
            });
        },
    },
    1373: {
        delay: function(p) { return 1; },
    },
    1374: {
        delay: function(p) { return 1; },
    },
    1375: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)}
    },
    1376: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)}
    },
    1379: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1379].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1379].turnedOn = false;
        },
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1380: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1380].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1380].turnedOn = false;
        },
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1387: {
        delay: function(p) { return 1; },
    },
    1389: {
        orb: function(p) { return p.unit.type == "INT" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },	
    },
    1390: {
        atk: function(p) { return p.unit.cost <= 40 ? 1.75 : 1; },
        type: "class"
    },
    1391: {
        atk: function(p) { return p.unit.cost <= 40 ? 1.75 : 1; },
        type: "class"
    },
    1392: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "class"
    },
    1393: {
        atk: function(p) { return 1.1; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.1, [p.friendCaptain, p.captain], p.effectName); },
    },
    1394: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    1395: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    1396: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.2; }
    },
    1397: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.2; }
    },
    1400: {
        affinity: function(p) { return p.unit.class.has("Shooter") ? window.specials[1400].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[1400].multiplier == 1.5 ? 1 : 0);
            window.specials[1400].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x Affinity boost. To switch to the ' + [1.75, 1.5][n] + 'x Affinity boost, disable and re-enable this special',
                name: '1400warning'
            });
        },
    },
    1401: {
        affinity: function(p) { return p.unit.class.has("Shooter") ? window.specials[1401].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[1401].multiplier == 1.5 ? 1 : 0);
            window.specials[1401].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x Affinity boost. To switch to the ' + [1.75, 1.5][n] + 'x Affinity boost, disable and re-enable this special',
                name: '1401warning'
            });
        },
    },
    1402: {
        atk: function(p) { return p.unit.type == "PSY" ? window.specials[1402].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[1402].multiplier == 1.3 ? 1 : 0);
            window.specials[1402].multiplier = [1.3, 1.5][n];
            p.scope.notify({
                text: 'Using the ' + [1.3, 1.5][n] + 'x Type boost. To switch to the ' + [1.5, 1.3][n] + 'x Type boost, disable and re-enable this special',
                name: '1402warning'
            });
        },
    },
    1405: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Shooter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    1406: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Shooter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    1407: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 2 : 1; },
        type: "type"
    },
    1408: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 2 : 1; },
        type: "type"
    },
    1409: {
        delay: function(p) { return 1; },
        atk: function(p) {
            return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        type: "class"
    },
    1410: {
        delay: function(p) { return 1; },
        atk: function(p) {
            return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        type: "class"
    },
    1415: {
        atk: function(p) { return p.unit.cost <= 30 ? 1.5 : 1; },
        type: "class"
    },
    1416: {
        atk: function(p) { return p.unit.cost <= 30 ? 1.5 : 1; },
        type: "class"
    },
    1419: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1420: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1421: {
        atk: function(p) { return p.unit.class.has("Driven") ? window.specials[1421].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP == 100 ? 2 : 1.5);
            window.specials[1421].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'equal to' : 'below') + ' 100%, using the ' + n + 'x multiplier.',
                name: '1421warning'
            });
        }
    },
    1422: {
        atk: function(p) { return p.unit.class.has("Driven") ? window.specials[1422].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP == 100 ? 2 : 1.5);
            window.specials[1422].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'equal to' : 'below') + ' 100%, using the ' + n + 'x multiplier.',
                name: '1422warning'
            });
        }
    },
    1425: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that an ally has been inflicted with Bind."
    },
    1426: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that an ally has been inflicted with Bind."
    },
    1428: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "class",
        warning: "Selected special (%name%) assumes that the enemy has been Delayed."
    },
    1431: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    1432: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    1435: {
        delay: function(p) { return 1; },
    },
    1436: {
        delay: function(p) { return 1; },
    },
    1437: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    1438: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    1439: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    1440: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    1441: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1442: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1443: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    1444: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    1445: {
        delay: function(p) { return 1; },
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 1.75 : 1; },
        type: "type"
    },
    1446: {
        delay: function(p) { return 1; },
    },
    1447: {
        atk: function(p) { return p.slot == p.sourceSlot ? window.specials[1447].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1447].multiplier == 1.2 ? 1 : 0);
            window.specials[1447].multiplier = [1.2, 1.5][n];
            p.scope.notify({
                text: 'Using the ' + [1.2, 1.5][n] + 'x ATK multiplier. To switch to the ' + [1.5, 1.2][n] + 'x multiplier, disable and re-enable this special',
                name: '1447warning'
            });
        }
    },
    1449: {
        def: function(p) { return 0.5; }
    },
    1450: {
        def: function(p) { return 0.5; }
    },
    1459: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1460: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1461: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        type: "type"
    },
    1462: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1462].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1462].turnedOn = false;
        }
    },
    1463: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1463].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1463].turnedOn = false;
        }
    },
    1466: {
        def: function(p) { return 0; }
    },
    1467: {
        def: function(p) { return 0; }
    },
    1468: {
        delay: function(p) { return 1; },
    },
    1469: {
        delay: function(p) { return 1; },
    },
    1476: {
        delay: function(p) { return 1; },
        atk: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1;
        },
        type: "class"
    },
    1477: {
        delay: function(p) { return 1; },
        atk: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1;
        },
        type: "class"
    },
    1478: {
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
    1479: {
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
    1482: {
        atk: function(p) { return window.specials[1482].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1482].multiplier == 1.25 ? 1 : 0);
            window.specials[1482].multiplier = [1.25, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.25, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.25][n] + 'x multiplier, disable and re-enable this special',
                name: '1482warning'
            });
        },
    },
    1483: {
        atk: function(p) { return window.specials[1483].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1483].multiplier == 1.25 ? 1 : 0);
            window.specials[1483].multiplier = [1.25, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.25, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.25][n] + 'x multiplier, disable and re-enable this special',
                name: '1483warning'
            });
        },
    },
    1484: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1485: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1486: {
        orb: function(p) { return (p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1487: {
        orb: function(p) { return (p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1490: {
        def: function(p) { return 0.5; }
    },
    1491: {
        def: function(p) { return 0.5; }
    },
    1492: {
        atk: function(p) { return !p.unit.class.has('Free Spirit') ? 1 : window.specials[1492].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1492].multiplier == 1.5 ? 1 : window.specials[1492].multiplier == 1.75 ? 2 : 0);
            window.specials[1492].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [1.75, 2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '1492warning'
            });
        }
    },
    1497: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type"
    },
    1501: {
        atk: function(p) { return 1.3; },
        type: "type"
    },
    1505: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    1506: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    1507: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    1508: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    1511: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type"
    },
    1512: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? window.specials[1512].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 1.5 : 1);
            window.specials[1512].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.5 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
                name: '1512warning'
            });
        }
    },
    1515: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1515].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1515].turnedOn = false;
        }
    },
    1516: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1516].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1516].turnedOn = false;
        }
    },
    1517: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1518: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1522: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type",
    },
    1525: {
        delay: function(p) { return 1; },
        atk: function(p) { return p.delayed > 0 ? 1.3 : 1; },
        type: "condition",
    },
    1526: {
        atk: function(p) { return p.slot < 2 ? window.specials[1526].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1526].multiplier == 1.5 ? 1 : 0);
            window.specials[1526].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '1526warning'
            });
        },
    },
    1527: {
        atk: function(p) { return p.slot < 2 ? window.specials[1527].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1527].multiplier == 1.5 ? 1 : 0);
            window.specials[1527].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '1527warning'
            });
        },
    },
    1528: {
        turnedOn: false,
        onActivation: function(p) {
            if(p.percHP < 30) {
                window.specials[1528].turnedOn = true;
            }
        },
        onDeactivation: function(p) {
            window.specials[1528].turnedOn = false;
        }
    },
    1529: {
        orb: function(p) { return (p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1529].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2.25 : 2);
            window.specials[1529].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.25 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '1529warning'
            });
        }
    },
    1530: {
        orb: function(p) { return (p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1530].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2.25 : 2);
            window.specials[1530].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.25 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '1530warning'
            });
        }
    },
    1531: {
        delay: function(p) { return 1; },
        chainAddition: function(p) {return window.specials[1531].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[1531].multiplier == 0.2 ? 1 : 0);
            window.specials[1531].multiplier = [0.2, 0.3][n];
            p.scope.notify({
                text: 'Using the ' + [0.2, 0.3][n] + 'x chain addition. To switch to the ' + [0.3, 0.2][n] + 'x chain addition, disable and re-enable this special',
                name: '1531warning'
            });
        }
    },
    1532: {
        delay: function(p) { return 1; },
        chainAddition: function(p) {return window.specials[1532].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[1532].multiplier == 0.2 ? 1 : 0);
            window.specials[1532].multiplier = [0.2, 0.3][n];
            p.scope.notify({
                text: 'Using the ' + [0.2, 0.3][n] + 'x chain addition. To switch to the ' + [0.3, 0.2][n] + 'x chain addition, disable and re-enable this special',
                name: '1532warning'
            });
        }
    },
    1535: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "type"
    },
    1536: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "type"
    },
    1539: {
        def: function(p) { return 0.1; }
    },
    1540: {
        def: function(p) { return 0.1; }
    },
    1541: {
        chainAddition: function(p) { return 0.5; },
        def: function(p) { return 0; }
    },
    1542: {
        chainAddition: function(p) { return 0.5; },
        def: function(p) { return 0; }
    },
    1543: {
        delay: function(p) { return 1; },
    },
    1544: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    1545: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    1546: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1546].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1546].turnedOn = false;
        },
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    1547: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1547].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1547].turnedOn = false;
        },
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    1548: {
        delay: function(p) { return 1; },
        chainAddition: function(p) { return 0.2;}
    },
    1551: {
        delay: function(p) { return 1; },
    },
    1552: {
        atk: function(p) { return p.unit.cost == 40 ? 1.75 : 1; },
        type: "class"
    },
    1553: {
        atk: function(p) { return p.unit.cost == 40 ? 1.75 : 1; },
        type: "class"
    },
    1554: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.35 : 1; },
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.35, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        type: "type",
    },
    1555: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.35 : 1; },
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.35, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        type: "type",
    },
    1556: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
        warning: "Selected special (%name%) assumes that the enemy has over 3,000,000 HP."
    },
    1557: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1557].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1557].turnedOn = false;
        },
    },
    1561: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    1562: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    1563: {
        chainAddition: function(p) { return 0.3; }
    },
    1564: {
        chainAddition: function(p) { return 0.3; }
    },
    1567: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1568: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1570: {
        staticMult: function(p) { return 80; }
    },
    1571: {
        staticMult: function(p) { return 80; }
    },
    1572: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "class"
    },
    1573: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "class"
    },
    1574: {
        delay: function(p) { return 1; },
    },
    1575: {
        delay: function(p) { return 1; },
    },
    1578: {
        chainAddition: function(p) {return window.specials[1578].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[1578].multiplier == 0.2 ? 1 : window.specials[1578].multiplier == 0.3 ? 2 : 0);
            window.specials[1578].multiplier = [0.2, 0.3, 0.5][n];
            p.scope.notify({
                text: 'Using the ' + [0.2, 0.3, 0.5][n] + 'x chain addition. To switch to the ' + [0.3, 0.5, 0.2][n] + 'x chain addition, disable and re-enable this special',
                name: '1578warning'
            });
        }
    },
    1579: {
        chainAddition: function(p) {return window.specials[1579].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[1579].multiplier == 0.2 ? 1 : window.specials[1579].multiplier == 0.3 ? 2 : 0);
            window.specials[1579].multiplier = [0.2, 0.3, 0.5][n];
            p.scope.notify({
                text: 'Using the ' + [0.2, 0.3, 0.5][n] + 'x chain addition. To switch to the ' + [0.3, 0.5, 0.2][n] + 'x chain addition, disable and re-enable this special',
                name: '1579warning'
            });
        }
    },
    1580: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1581: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1582: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        type: "class"
    },
    1583:{
        orb: function(p) { return (p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1583].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[1583].multiplier == 1.5 ? 1 : 0);
            window.specials[1583].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x Orb boost. To switch to the ' + [2, 1.5][n] + 'x Orb boost, disable and re-enable this special',
                name: '1583warning'
            });
        },
    },
    1584:{
        orb: function(p) { return (p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1584].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[1584].multiplier == 1.5 ? 1 : 0);
            window.specials[1584].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x Orb boost. To switch to the ' + [2, 1.5][n] + 'x Orb boost, disable and re-enable this special',
                name: '1584warning'
            });
        },
    },
    1585: {
        atk: function(p) { return (p.percHP*p.maxHP/100 < 5000 && (p.unit.class.has("Slasher") || p.unit.class.has("Driven"))) ? 1.75 : 1; },
        rcv: function(p) { return (p.percHP*p.maxHP/100 < 5000 && (p.unit.class.has("Slasher") || p.unit.class.has("Driven"))) ? 1.5 : 1; },
        type: "class"
    },
    1586: {
        atk: function(p) { return (p.percHP*p.maxHP/100 < 5000 && (p.unit.class.has("Slasher") || p.unit.class.has("Driven"))) ? 1.75 : 1; },
        rcv: function(p) { return (p.percHP*p.maxHP/100 < 5000 && (p.unit.class.has("Slasher") || p.unit.class.has("Driven"))) ? 1.5 : 1; },
        type: "class"
    },
    1587: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },  
    1588: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1591: {
        atk: function(p) {
            return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        type: "class"
    },
    1592: {
        atk: function(p) {
            return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        type: "class"
    },
    1593: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1593].turnedOn = true;
            p.scope.notify({
                text: 'This does not activate G4 Captain boost, only the "beneficial" Orb Effect, to enable G4\' 4x boost, use the Captain Action checkboxes.',
                name: '1593warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1593].turnedOn = false;
        }
    },
    1594: {
        orb: function(p) { return (p.unit.class.has("Powerhouse")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1595: {
        orb: function(p) { return (p.unit.class.has("Powerhouse")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1598: {
        atk: function(p) { return 1.2 },
        type: "class",
    },
    1599: {
        def: function(p) { return 0.5 },
    },
    1600: {
        orb: function(p) { return (p.unit.type == "INT" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },	
    },
    1603: {
        delay: function(p) { return 1; },
    },
    1606: {
        delay: function(p) { return 1; },
        def: function(p) { return 0.5 },
    },
    1607: {
        atk: function(p) { return (p.unit.class.has("Shooter")) ? 1.5 : 1; },
        type: "class",
    },
    1613: {
        def: function(p) { return 0.5 },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1614: {
        def: function(p) { return 0.5 },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1615: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1616: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1617: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" || p.unit.type == "DEX" ? 1.75 : 1; },
        type: "type"
    },
    1618: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" || p.unit.type == "DEX" ? 1.75 : 1; },
        type: "type"
    },
    1619: {
        delay: function(p) { return 1; },
    },
    1620: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        type: "class",
    },
    1621: {
        atk: function(p) { return p.unit.class.has("Striker") ? 2 : 1; },
        type: "class",
    },
    1622: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    1623: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    1626: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    1627: {
        affinity: function(p) { return p.unit.class.has("Striker") ? window.specials[1627].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[1627].multiplier == 1.25 ? 1 : window.specials[1627].multiplier == 1.5 ? 2 : 0);
            window.specials[1627].multiplier = [1.25, 1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.25, 1.5, 1.75][n] + 'x affinity boost. To switch to the ' + [1.5, 1.75, 1.25][n] + 'x affinity boost, disable and re-enable this special',
                name: '1627warning'
            });
        }
    },
    1628: {
        affinity: function(p) { return p.unit.class.has("Striker") ? window.specials[1628].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[1628].multiplier == 1.25 ? 1 : window.specials[1628].multiplier == 1.5 ? 2 : 0);
            window.specials[1628].multiplier = [1.25, 1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.25, 1.5, 1.75][n] + 'x affinity boost. To switch to the ' + [1.5, 1.75, 1.25][n] + 'x affinity boost, disable and re-enable this special',
                name: '1628warning'
            });
        }
    },
    1631: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class",
    },
    1632: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class",
    },
    1633: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    1636: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been poisoned or STRONGLY Poisoned."
    },
    1637: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been poisoned or STRONGLY Poisoned."
    },
    1640: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1640].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1640].turnedOn = false;
        }
    },
    1641: {
        atk: function(p) { return 1.2; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been poisoned or STRONGLY Poisoned."
    },
    1643: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.2 : 1; },
        type: "class",
    },
    1650: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1651: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1651].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1651].turnedOn = false;
        }
    },
    1652: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1652].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1652].turnedOn = false;
        }
    },
    1653: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1654: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1655: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
    1656: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
    1657: {
        chain: function(p) { return window.specials[1657].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[1657].multiplier == 2.75) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[1657].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[1657].multiplier = 1;
            if (p.captain.class.has("Striker")) {
                window.specials[1657].multiplier = 2.75;
            }
        },
    },
    1658: {
        chain: function(p) { return window.specials[1658].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[1658].multiplier == 2.75) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[1658].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[1658].multiplier = 1;
            if (p.captain.class.has("Striker")) {
                window.specials[1658].multiplier = 2.75;
            }
        },
    },
    1661: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1662: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1664: {
        atk: function(p) { return p.captain.class.has("Shooter") ? p.unit.class.has("Shooter") ? 2 : 1 : 1; },
        type: "class",
    },
    1665: {
        atk: function(p) { return p.captain.class.has("Shooter") ? p.unit.class.has("Shooter") ? 2 : 1 : 1; },
        type: "class",
    },
    1666: {
        orb: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1666].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP <= 70 ? 1 : 1.5);
            window.specials[1666].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.5 ? 'above' : 'below') + ' 70%, using the ' + n + 'x orb boost.',
                name: '1666warning'
            });
        }
    },
    1667: {
        orb: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1667].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP <= 70 ? 1 : 1.5);
            window.specials[1667].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.5 ? 'above' : 'below') + ' 70%, using the ' + n + 'x orb boost.',
                name: '1667warning'
            });
        }
    },
    1668: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    1669: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    1670: {
        delay: function(p) { return 1; },
    },
    1671: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1673: {
        def: function(p) { return 0.1; }
    },
    1674: {
        def: function(p) { return 0.1; }
    },
    1675: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1},
        type: "class"
    },
    1676: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1},
        type: "class"
    },
    1677: {
        affinity: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    1678: {
        affinity: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; }
    },
    1681: {
        chainAddition: function(p) { return window.specials[1681].multiplier; },
        onActivation: function(p) {
            var n = (p.slot > 1 ? 0.5 : 0);
            window.specials[1681].multiplier = n;
            p.scope.notify({
                text: 'Luffy is ' + (n == 0.5 ? 'not captain' : 'captain') + ', using the ' + n + ' Chain Addition.',
                name: '1681warning'
            });
        }
    },
    1682: {
        chainAddition: function(p) { return window.specials[1682].multiplier; },
        onActivation: function(p) {
            var n = (p.slot > 1 ? 0.5 : 0);
            window.specials[1682].multiplier = n;
            p.scope.notify({
                text: 'Luffy is ' + (n == 0.5 ? 'not captain' : 'captain') + ', using the ' + n + ' Chain Addition.',
                name: '1682warning'
            });
        }
    },
    1683: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1684: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1685: {
        delay: function(p) { return 1; },
    },
    1686: {
        delay: function(p) { return 1; },
    },
    1687: {
        def: function(p) { return 0; }
    },
    1688: {
        def: function(p) { return 0; }
    },
    1689: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1690: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1691: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    1692: {
        chainAddition: function(p) { return 0.3; },
        def: function(p) { return 0.5; }
    },
    1693: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)}
    },
    1694: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)}
    },
    1695: {
        orb: function(p) { return (p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1696: {
        orb: function(p) { return (p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1699: {
        chainAddition: function(p) { return 0.3; }
    },
    1700: {
        chainAddition: function(p) { return 0.3; }
    },
    1703: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Toxin."
    },
    1704: {
        atk: function(p) { return 1.75; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Toxin."
    },
    1707: {
        def: function(p) { return 0; }
    },
    1710: {
        orb: function(p) { return (p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1711: {
        orb: function(p) { return (p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1712: {
        orb: function(p) { return (p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1713: {
        orb: function(p) { return (p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1716: {
        delay: function(p) { return 1; },
        atk: function(p) { return p.unit.class.has("Driven") ? window.specials[1716].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 1.75 : 1);
            window.specials[1716].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
                name: '1716warning'
            });
        }
    },
    1718: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.25 : 1},
        type: "class"
    },
    1720: {
        chain: function(p) { return p.captain.class.has("Fighter") ? 2.5 : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1721: {
        chain: function(p) { return p.captain.class.has("Fighter") ? 2.5 : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1722: {
        atk: function(p) { return p.unit.class.has("Striker") ? window.specials[1722].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.5 : 1);
            window.specials[1722].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x multiplier.',
                name: '1722warning'
            });
        }
    },
    1723: {
        atk: function(p) { return p.unit.class.has("Striker") ? window.specials[1723].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.5 : 1);
            window.specials[1723].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x multiplier.',
                name: '1723warning'
            });
        }
    },
    1724: {
        staticMult: function(p) { return 25; }
    },
    1725: {
        staticMult: function(p) { return 25; }
    },
    1726: {
        staticMult: function(p) { return 55; }
    },
    1727: {
        staticMult: function(p) { return 55; }
    },
    1732: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection.",
        type: "class"
    },
    1733: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection.",
        type: "class"
    },
    1736: {
        delay: function(p) { return 1; },
    },
    1737: {
        delay: function(p) { return 1; },
    },
    1738: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1739: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1740: {
        def: function(p) { return .2; },
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1},
        type: "class"
    },
    1741: {
        def: function(p) { return .2; },
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1},
        type: "class"
    },
    1742: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition"
    },
    1743: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition"
    },
    1744: {
        orb: function(p) { return (p.unit.class.has("Shooter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1745: {
        orb: function(p) { return (p.unit.class.has("Shooter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1746: {
        delay: function(p) { return 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1746].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1746].turnedOn = false;
        }
    },
    1747: {
        delay: function(p) { return 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1747].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1747].turnedOn = false;
        }
    },
    1750:{
        orb: function(p) { return (p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1750].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[1750].multiplier == 1.75 ? 1 : 0);
            window.specials[1750].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x Orb boost. To switch to the ' + [2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '1750warning'
            });
        },
    },
    1751:{
        orb: function(p) { return (p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1751].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[1751].multiplier == 1.75 ? 1 : 0);
            window.specials[1751].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x Orb boost. To switch to the ' + [2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '1751warning'
            });
        },
    },
    1752: {
        atk: function(p) { return !(p.unit.cost <= 30) ? 1 : window.specials[1752].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1752].multiplier == 1.75 ? 1 : 0);
            window.specials[1752].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '1752warning'
            });
        }
    },
    1753: {
        atk: function(p) { return !(p.unit.cost <= 30) ? 1 : window.specials[1753].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1753].multiplier == 1.75 ? 1 : 0);
            window.specials[1753].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '1753warning'
            });
        }
    },
    1754: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1755: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1758: {
        delay: function(p) { return 1; },
    },
    1759: {
        delay: function(p) { return 1; },
    },
    1762: {
        def: function(p) { return .2; },
    },
    1763: {
        def: function(p) { return .2; },
    },
    1764: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1765: {
        def: function(p) { return .5; },
    },
    1766: {
        def: function(p) { return .5; },
    },
    1767: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1},
        type: "class"
    },
    1769: {
        delay: function(p) { return 1; },
        atk: function(p) { return (p.delayed > 0 && p.captain.class.has("Cerebral")) ? 1.5 : 1; },
        type: "condition",
    },
    1770: {
        delay: function(p) { return 1; },
        atk: function(p) { return (p.delayed > 0 && p.captain.class.has("Cerebral")) ? 1.5 : 1; },
        type: "condition",
    },
    1771: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1772: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1773: {
        orb: function(p) { return p.unit.class.has("Free Spirit") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1774: {
        orb: function(p) { return p.unit.class.has("Free Spirit") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1777: {
        chainAddition: function(p) { return 0.2;}
    },
    1778: {
        chainAddition: function(p) { return 0.2;}
    },
    1779: {
        chainAddition: function(p) {return 0.5;}
    },
    1780: {
        chainAddition: function(p) { return 0.5;}
    },
    1781: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.3 : 1; },
        type: "type"
    },
    1782: {
        delay: function(p) { return 1; },
    },
    1783: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1784: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    1785: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    1791: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1792: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    1793: {
        atk: function(p) { return !(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1 : window.specials[1793].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1793].multiplier == 1.75 ? 1 : 0);
            window.specials[1793].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '1793warning'
            });
        }
    },
    1794: {
        atk: function(p) { return !(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1 : window.specials[1794].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1794].multiplier == 1.75 ? 1 : 0);
            window.specials[1794].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '1794warning'
            });
        }
    },
    1795: {
        delay: function(p) { return 1; },
    },
    1796: {
        delay: function(p) { return 1; },
    },
    1797: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
    },
    1798: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
    },
    1799: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition"
    },
    1800: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition"
    },
    1801: {
        def: function(p) { return 0.1; }
    },
    1802: {
        def: function(p) { return 0.1; }
    },
    1805: {
		def: function(p) { return 0.0; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1806: {
		def: function(p) { return 0.0; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    1807: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[1807].turnedOn[p.slot] = true;
            if (p.captain) window.specials[1807].multiplier = p.captain.class.has("Slasher");
            else window.specials[1807].multiplier = false;
        },
        onDeactivation: function(p) {
            window.specials[1807].turnedOn[p.slot] = false;
        },
        chain: function(p) { return window.specials[1807].multiplier ? 2.75 : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        },
        orb: function(p) { return window.specials[1807].multiplier ? p.unit.class.has("Slasher") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    1808: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[1808].turnedOn[p.slot] = true;
            if (p.captain) window.specials[1808].multiplier = p.captain.class.has("Slasher");
            else window.specials[1808].multiplier = false;
        },
        onDeactivation: function(p) {
            window.specials[1808].turnedOn[p.slot] = false;
        },
        chain: function(p) { return window.specials[1808].multiplier ? 2.75 : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        },
        orb: function(p) { return window.specials[1808].multiplier ? p.unit.class.has("Slasher") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    1811: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    1812: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    1813: {
        atk: function(p) { return p.slot == 1 ? 1.5 : 1; },
        type: "class"
    },
    1814: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class"
    },
    1815: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class"
    },
    1816: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        type: "class"
    },
    1817: {
        atk: function(p) { return p.slot > 1 ? 1.2 : 1; },
        type: "class"
    },
    1818: {
        atk: function(p) { return p.slot > 1 ? 1.2 : 1; },
        type: "class"
    },
    1819: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1825: {
        affinity: function(p) { return p.unit.type == "INT" ? 1.75 : 1; }
    },
    1826: {
        affinity: function(p) { return p.unit.type == "INT" ? 1.75 : 1; }
    },
    1827: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        type: "type"
    },
    1828: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        type: "type"
    },
    1829: {
        orb: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1830: {
        orb: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1831: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    1832: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    1835: {
        chain: function(p) { return (p.captain.type == "STR" || p.captain.type == "PSY") ? 2.5 : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        },
        delay: function(p) { return p.captain.class.has("Powerhouse") ? 1 : 0; },
    },
    1836: {
        chain: function(p) { return (p.captain.type == "STR" || p.captain.type == "PSY") ? 2.5 : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        },
        delay: function(p) { return p.captain.class.has("Powerhouse") ? 1 : 0; },
    },
    1837: {
        atk: function(p) { return (p.captain.type == "QCK" || p.captain.type == "PSY") ? 1.75 : 1; },
        type: "class",
    },
    1838: {
        atk: function(p) { return (p.captain.type == "QCK" || p.captain.type == "PSY") ? 1.75 : 1; },
        type: "class",
    },
    1839: {
        atk: function(p) { return (p.delayed > 0 && (p.captain.type == "DEX" || p.captain.type == "PSY")) ? 1.75 : 1; },
        type: "condition",
        staticMult: function(p) { return p.captain.class.has("Powerhouse") ? 40 : 0; }
    },
    1840: {
        atk: function(p) { return (p.delayed > 0 && (p.captain.type == "DEX" || p.captain.type == "PSY")) ? 1.75 : 1; },
        type: "condition",
        staticMult: function(p) { return p.captain.class.has("Powerhouse") ? 40 : 0; }
    },
    1841: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        type: "class"
    },
    1842: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        type: "class"
    },
    1845: {
        def: function(p) { return 0; }
    },
    1846: {
        def: function(p) { return 0; }
    },
    1847: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    1850: {
        chainAddition: function(p) { return 0.5; }
    },
    1851: {
        chainAddition: function(p) { return 0.5; }
    },
    1852: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type",
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection AND a Barrier active.",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    1853: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type",
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection AND a Barrier active.",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    1854: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Free Spirit") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1855: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Free Spirit") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1856: {
        affinity: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; }
    },
    1857: {
        affinity: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; }
    },
    1858: {
        staticMult: function(p) { return 65; }
    },
    1859: {
        staticMult: function(p) { return 65; }
    },
    1860: {
        atk: function(p) { return (p.delayed > 0 && (p.captain.class.has("Shooter"))) ? 1.75 : 1; },
        type: "condition",
    },
    1861: {
        atk: function(p) { return (p.delayed > 0 && (p.captain.class.has("Shooter"))) ? 1.75 : 1; },
        type: "condition",
    },
    1864: {
        atk: function(p) { return p.unit.class.has("Striker") ? window.specials[1864].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1864].multiplier === 1.5 ? 1 : 0);
            window.specials[1864].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '1864warning'
            });
        }
    },
    1865: {
        atk: function(p) { return p.unit.class.has("Striker") ? window.specials[1865].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1865].multiplier === 1.5 ? 1 : 0);
            window.specials[1865].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '1865warning'
            });
        }
    },
    1868: {
        delay: function(p) { return 1; },
    },
    1869: {
        delay: function(p) { return 1; },
    },
    1872: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class"
    },
    1873: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class"
    },
    1874: {
        chainAddition: function(p) { return 0.5; }
    },
    1875: {
        chainAddition: function(p) { return 0.5; }
    },
    1878: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[1878].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Bartolomeo is your captain',
                name: '1878warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1878].turnedOn[p.slot] = false;
        }
    },
    1879: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[1879].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Bartolomeo is your captain',
                name: '1879warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1879].turnedOn[p.slot] = false;
        }
    },
    1882: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    1883: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    1884: {
        delay: function(p) { return 1; },
    },
    1885: {
        delay: function(p) { return 1; },
    },
    1886: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
    },
    1887: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
    },
    1888: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Driven") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1889: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Driven") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1890: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1890].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1890].turnedOn = false;
        },
    },
    1891: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1891].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1891].turnedOn = false;
        },
    },
    1892: {
        atk: function(p) { return (p.delayed > 0) ? window.specials[1892].multiplier : 1; },
        type: "condition",
        delay: function(p) { return 1; },
        onActivation: function(p) {
            window.specials[1892].multiplier = false;
            if (p.captain) if (p.captain.type == "PSY") window.specials[1892].multiplier = 1.5;
            else window.specials[1892].multiplier = 1;
        },
    },
    1893: {
        atk: function(p) { return (p.delayed > 0) ? window.specials[1893].multiplier : 1; },
        type: "condition",
        delay: function(p) { return 1; },
        onActivation: function(p) {
            window.specials[1893].multiplier = false;
            if (p.captain) if (p.captain.type == "PSY") window.specials[1893].multiplier = 1.5;
            else window.specials[1893].multiplier = 1;
        },
    },
    1894: {
        atk: function(p) { return p.unit.class.has("Fighter") ? window.specials[1894].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 2 : 1);
            window.specials[1894].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x ATK boost.',
                name: '1894warning'
            });
        }
    },
    1895: {
        atk: function(p) { return p.unit.class.has("Fighter") ? window.specials[1895].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 2 : 1);
            window.specials[1895].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x ATK boost.',
                name: '1895warning'
            });
        }
    },
    1896: {
        chainAddition: function(p) { return p.captain.class.has("Driven") ? window.specials[1896].multiplier : 0; },
        onActivation: function(p) {
            var n = (window.specials[1896].multiplier == .3 ? 1 : 0);
            window.specials[1896].multiplier = [.3, .7][n];
            p.scope.notify({
                text: 'Using the ' + [.3, .7][n] + 'x chain boost multiplier. To switch to the ' + [.7, .3][n] + 'x multiplier, disable and re-enable this special',
                name: '1896warning'
            });
        },
    },
    1897: {
        chainAddition: function(p) { return p.captain.class.has("Driven") ? window.specials[1897].multiplier : 0; },
        onActivation: function(p) {
            var n = (window.specials[1897].multiplier == .3 ? 1 : 0);
            window.specials[1897].multiplier = [.3, .7][n];
            p.scope.notify({
                text: 'Using the ' + [.3, .7][n] + 'x chain boost multiplier. To switch to the ' + [.7, .3][n] + 'x multiplier, disable and re-enable this special',
                name: '1897warning'
            });
        },
    },
    1900: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type"
    },
    1905: {
        orb: function(p) { return (p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1906: {
        orb: function(p) { return (p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1907: {
        atk: function(p) { return p.classCount.Driven == 6 ? p.unit.class.has("Driven") ? 2 : 1 : 1; },
        type: "class",
    },
    1908: {
        atk: function(p) { return p.classCount.Driven == 6 ? p.unit.class.has("Driven") ? 2 : 1 : 1; },
        type: "class",
    },
    1913: {
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1914: {
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1915: {
        affinity: function(p) { return 1.75; }
    },
    1916: {
        affinity: function(p) { return 1.75; }
    },
    1917: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        type: "type"
    },
    1918: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        type: "type"
    },
    1921: {
        atk: function(p) { return !p.unit.class.has('Slasher') ? 1 : p.sourceSlot < 2 ? 2 : 1.75 ; },
        type: "class",
        chain: function(p) { return (window.specials[1921].multiplier == 2.5) ? 2.5 : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1];
            if (window.specials[1921].multiplier == 2.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[1921].multiplier = 1;
            if (p.slot > 1) {
                window.specials[1921].multiplier = 2.5;
            }
        },
    },
    1922: {
        orb: function(p) { return p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }
    },
    1923: {
        atk: function(p) { return 1.75; },
        type: "class"
    },
    1924: {
        atk: function(p) { return 1.75; },
        type: "class"
    },
    1925: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class",
    },
    1926: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class",
    },
    1927: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "type"
    },
    1928: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Driven")) ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    1929: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        type: "type"
    },
    1930: {
        atk: function(p) { return p.unit.type == "DEX" ? 2 : 1; },
        type: "type"
    },
    1931: {
        chainAddition: function(p) { return 0.25; },
        atk: function(p) { return !p.unit.class.has('Fighter') ? 1 : window.specials[1931].multiplier; },
        type: "class",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1931].turnedOn = true;
            var n = (window.specials[1933].turnedOn ? 1 : 0);
            window.specials[1931].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, Switch the order of the specials needed.',
                name: '1931warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1931].turnedOn = false;
        },
    },
    1932: {
        orb: function(p) { return (p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        atk: function(p) { return !p.unit.class.has('Fighter') ? 1 : window.specials[1932].multiplier; },
        type: "class",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1932].turnedOn = true;
            var n = (window.specials[1931].turnedOn ? 1 : 0);
            window.specials[1932].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, Switch the order of the specials needed.',
                name: '1932warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1932].turnedOn = false;
        },
    },
    1933: {
        atk: function(p) { return !p.unit.class.has('Fighter') ? 1 : window.specials[1933].multiplier; },
        type: "class",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1933].turnedOn = true;
            var n = (window.specials[1932].turnedOn ? 1 : 0);
            window.specials[1933].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, Switch the order of the specials needed.',
                name: '1933warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1933].turnedOn = false;
        },
    },
    1934: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Fighter") ? 2 : 1},
        type: "class"
    },
    1935: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Fighter") ? 2 : 1},
        type: "class"
    },
    1936: {
        staticMult: function(p) { return 15; }
    },
    1937: {
        staticMult: function(p) { return 15; }
    },
    1938: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            p.scope.notify({
                text: 'Assuming there are more than 4 enemies on the stage',
                name: '1938warning'
            });
        },
    },
    1939: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            p.scope.notify({
                text: 'Assuming there are more than 4 enemies on the stage',
                name: '1938warning'
            });
        },
    },
    1940: {
        turnedOn: false,
        onActivation: function(p) {
            if(p.captain.class.has("Free Spirit")) {
                window.specials[1940].turnedOn = true;
            }
        },
        onDeactivation: function(p) {
            window.specials[1940].turnedOn = false;
        },
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.75 : 1; },
        type: "type"
    },
    1941: {
        turnedOn: false,
        onActivation: function(p) {
            if(p.captain.class.has("Free Spirit")) {
                window.specials[1941].turnedOn = true;
            }
        },
        onDeactivation: function(p) {
            window.specials[1941].turnedOn = false;
        },
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.75 : 1; },
        type: "type"
    },
    1942: {
        atk: function(p) { return (p.delayed > 0) ? window.specials[1942].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[1942].multiplier = false;
            if (p.captain) if (p.captain.class.has("Free Spirit")) window.specials[1942].multiplier = 1.75;
            else window.specials[1942].multiplier = 1;
        },
    },
    1943: {
        atk: function(p) { return (p.delayed > 0) ? window.specials[1943].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[1943].multiplier = false;
            if (p.captain) if (p.captain.class.has("Free Spirit")) window.specials[1943].multiplier = 1.75;
            else window.specials[1943].multiplier = 1;
        },
    },
    1944: {
        affinity: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; }
    },
    1945: {
        affinity: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; }
    },
    1946: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    1947: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    1952: {
        chainAddition: function(p) { return p.captain.class.has("Cerebral") ? .7 : 0; }
    },
    1953: {
        chainAddition: function(p) { return p.captain.class.has("Cerebral") ? .7 : 0; }
    },
    1954: {
        atk: function(p) { return !p.unit.class.has('Cerebral') ? 1 : window.specials[1954].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1954].multiplier == 1.75 ? 1 : 0);
            window.specials[1954].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '1954warning'
            });
        }
    },
    1955: {
        atk: function(p) { return !p.unit.class.has('Cerebral') ? 1 : window.specials[1955].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1955].multiplier == 1.75 ? 1 : 0);
            window.specials[1955].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '1955warning'
            });
        }
    },
    1956: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        }
    },
    1957: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        }
    },
    1960: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1960].turnedOn = true;
            p.scope.notify({
                text: 'Captain Ability boost effect only works if Sweet Heart Memory Pudding is the captain',
                name: '1960warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1960].turnedOn[p.slot] = false;
        },
        delay: function(p) { return 1; }
    },
    1961: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1961].turnedOn = true;
            p.scope.notify({
                text: 'Captain Ability boost effect only works if Sweet Heart Memory Pudding is the captain',
                name: '1961warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1961].turnedOn[p.slot] = false;
        },
        delay: function(p) { return 1; }
    },
    1962: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1962].turnedOn = true;
            p.scope.notify({
                text: 'Captain Ability boost effect only works if Sweet Heart Memory Sanji is the Captain',
                name: '1962warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1962].turnedOn[p.slot] = false;
        },
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1963: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1963].turnedOn = true;
            p.scope.notify({
                text: 'Captain Ability boost effect only works if Sweet Heart Memory Sanji is the Captain',
                name: '1963warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1963].turnedOn[p.slot] = false;
        },
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    1964: {
        delay: function(p) { return 1; },
    },
    1965: {
        delay: function(p) { return 1; },
    },
    1966: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
    },
    1967:{
        orb: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1967].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[1967].multiplier == 1.75 ? 1 : window.specials[1967].multiplier == 2 ? 2 : 0);
            window.specials[1967].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Orb boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '1967warning'
            });
        },
    },
    1968:{
        orb: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1968].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[1968].multiplier == 1.75 ? 1 : window.specials[1968].multiplier == 2 ? 2 : 0);
            window.specials[1968].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Orb boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '1968warning'
            });
        },
    },
    1971: {
        atk: function(p) { return (window.specials[1971].multiplier && p.defenseDown) ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return window.specials[1971].multiplier ? .2 : 1; },
        onActivation: function(p) {
            if (p.captain) if (p.captain.class.has("Cerebral")) window.specials[1971].multiplier = true;
            else window.specials[1971].multiplier = false;
        },
    },
    1972: {
        atk: function(p) { return (window.specials[1972].multiplier && p.defenseDown) ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return window.specials[1972].multiplier ? .2 : 1; },
        onActivation: function(p) {
            if (p.captain) if (p.captain.class.has("Cerebral")) window.specials[1972].multiplier = true;
            else window.specials[1972].multiplier = false;
        },
    },
    1977: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1977].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1977].turnedOn = false;
        }
    },
    1978: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1978].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1978].turnedOn = false;
        }
    },
    1983: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    1984: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
    },
    1985: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
    },
    1986: {
        chainAddition: function(p) { return window.specials[1986].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[1986].multiplier == .5 ? 1 : 0);
            if (p.colorCount.STR >= 3) {
                window.specials[1986].multiplier = [.5, .75][n];
            }
            else {
                window.specials[1986].multiplier = 0;
            }
            p.scope.notify({
                text: 'Using the ' + [.5, .75][n] + 'x chain boost multiplier. To switch to the ' + [.75, .5][n] + 'x multiplier, disable and re-enable this special',
                name: '1986warning'
            });
        },
    },
    1987: {
        chainAddition: function(p) { return window.specials[1987].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[1987].multiplier == .5 ? 1 : 0);
            if (p.colorCount.STR >= 3) {
                window.specials[1987].multiplier = [.5, .75][n];
            }
            else {
                window.specials[1987].multiplier = 0;
            }
            p.scope.notify({
                text: 'Using the ' + [.5, .75][n] + 'x chain boost multiplier. To switch to the ' + [.75, .5][n] + 'x multiplier, disable and re-enable this special',
                name: '1987warning'
            });
        },
    },
    1988: {
        atk: function(p) { return (p.delayed > 0 && window.specials[1988].multiplier) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[1988].multiplier = false;
            if (p.captain) if (p.captain.class.has("Slasher")) window.specials[1988].multiplier = true;
            else window.specials[1988].multiplier = false;
        },
    },
    1989: {
        atk: function(p) { return (p.delayed > 0 && window.specials[1989].multiplier) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[1989].multiplier = false;
            if (p.captain) if (p.captain.class.has("Slasher")) window.specials[1989].multiplier = true;
            else window.specials[1989].multiplier = false;
        },
    },
    1990: {
        delay: function(p) { return 1; },
        staticMult: function(p) { return window.specials[1990].multiplier ? 55 : 0; },
        onActivation: function(p) {
            window.specials[1990].multiplier = false;
            if (p.captain) if (p.captain.type == "STR" || p.captain.type == "QCK") window.specials[1990].multiplier = true;
            else window.specials[1990].multiplier = false;
        },
    },
    1991: {
        delay: function(p) { return 1; },
        staticMult: function(p) { return window.specials[1991].multiplier ? 55 : 0; },
        onActivation: function(p) {
            window.specials[1991].multiplier = false;
            if (p.captain) if (p.captain.type == "STR" || p.captain.type == "QCK") window.specials[1991].multiplier = true;
            else window.specials[1991].multiplier = false;
        },
    },
    1992: {
        atk: function(p) { return p.unit.class.has('Free Spirit') ? window.specials[1992].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1992].multiplier == 1.75 ? 1 : 0);
            if (p.colorCount.QCK >= 3) {
                window.specials[1992].multiplier = [1.75, 2][n];
            }
            else{
                window.specials[1992].multiplier = 1;
            }
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '1992warning'
            });
        }
    },
    1993: {
        atk: function(p) { return p.unit.class.has('Free Spirit') ? window.specials[1993].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1993].multiplier == 1.75 ? 1 : 0);
            if (p.colorCount.QCK >= 3) {
                window.specials[1993].multiplier = [1.75, 2][n];
            }
            else{
                window.specials[1993].multiplier = 1;
            }
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '1993warning'
            });
        }
    },
    1996: {
        delay: function(p) { return 1; },
    },
    1997: {
        delay: function(p) { return 1; },
    },
    2000: {
        orb: function(p) { return p.unit.type == "DEX" || p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, 1, 1, [p.friendCaptain, p.captain], p.effectName); }
    },
    2003: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    2004: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    2006: {
        atk: function(p) { return p.unit.type == window.specials[2006].multiplier ? 2.25 : 1; },
        type: "type",
        chainAddition: function(p) { return .9; },
        onActivation: function(p) {
            window.specials[2006].multiplier = p.colorCount.STR>=4 ? "STR" : p.colorCount.DEX>=4 ? "DEX" : p.colorCount.QCK>=4 ? "QCK" : p.colorCount.PSY>=4 ? "PSY" : p.colorCount.INT>=4 ? "INT" : "NaT";
        }
    },
    2007: {
        atk: function(p) { return p.unit.type == window.specials[2007].multiplier ? 2.25 : 1; },
        type: "type",
        chainAddition: function(p) { return .9; },
        onActivation: function(p) {
            window.specials[2007].multiplier = p.colorCount.STR>=4 ? "STR" : p.colorCount.DEX>=4 ? "DEX" : p.colorCount.QCK>=4 ? "QCK" : p.colorCount.PSY>=4 ? "PSY" : p.colorCount.INT>=4 ? "INT" : "NaT";
        }
    },
    2008: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "INT") ? window.specials[2008].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2008].multiplier == 1.5 ? 1 : window.specials[2008].multiplier == 1.75 ? 2 : 0);
            window.specials[2008].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x affinity boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x affinity boost, disable and re-enable this special',
                name: '2008warning'
            });
        }
    },
    2009: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "INT") ? window.specials[2009].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2009].multiplier == 1.5 ? 1 : window.specials[2009].multiplier == 1.75 ? 2 : 0);
            window.specials[2009].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x affinity boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x affinity boost, disable and re-enable this special',
                name: '2009warning'
            });
        }
    },
    2014: {
        delay: function(p) { return 1; },
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    2015: {
        delay: function(p) { return 1; },
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    2016: {
        atk: function(p) { return p.unit.class.has("Driven") ? window.specials[2016].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2 : 1.5);
            window.specials[2016].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '2016warning'
            });
        }
    },
    2017: {
        atk: function(p) { return p.unit.class.has("Driven") ? window.specials[2017].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2 : 1.5);
            window.specials[2017].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '2017warning'
            });
        }
    },
    2020: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    2021: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    2022: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2023: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2024: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 2.25 : 1; },
        type: "type",
    },
    2025: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 2.25 : 1; },
        type: "type",
    },
    2026: {
        delay: function(p) { return 1; },
        affinity: function(p) { return !(p.unit.type == "QCK" || p.unit.type == "PSY") ? 1 : window.specials[2026].multiplier; },
        onActivation: function(p) {
            window.specials[2026].multiplier = 1;
            if (p.captain.type == "QCK" || p.captain.type == "PSY") {
                window.specials[2026].multiplier = 2;
            }
        }
    },
    2027: {
        delay: function(p) { return 1; },
        affinity: function(p) { return !(p.unit.type == "QCK" || p.unit.type == "PSY") ? 1 : window.specials[2027].multiplier; },
        onActivation: function(p) {
            window.specials[2027].multiplier = 1;
            if (p.captain.type == "QCK" || p.captain.type == "PSY") {
                window.specials[2027].multiplier = 2;
            }
        }
    },
    2028: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2028].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2028].multiplier = 1;
            if (p.colorCount.QCK + p.colorCount.PSY >= 4) {
                window.specials[2028].multiplier = 2;
            }
        }
    },
    2029: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2029].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2029].multiplier = 1;
            if (p.colorCount.QCK + p.colorCount.PSY >= 4) {
                window.specials[2029].multiplier = 2;
            }
        }
    },
    2032: {
        atk: function(p) { return 1.5; },
        type: "type",
        orb: function(p) { return window.specials[2032].multiplier ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, window.specials[2032].multiplier, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        chainAddition: function(p) { return window.specials[2032].multiplier ? .3 : 0; },
        staticMult: function(p) { return window.specials[2032].multiplier ? 20 : 0; },
        onActivation: function(p) {
            if (p.captain.type == "PSY") {
                window.specials[2032].multiplier = true;
            }
            else{
                window.specials[2032].multiplier = false;
            }
        }
    },
    2033: {
        atk: function(p) { return 1.5; },
        type: "type",
        orb: function(p) { return window.specials[2033].multiplier ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, window.specials[2033].multiplier, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        chainAddition: function(p) { return window.specials[2033].multiplier ? .3 : 0; },
        staticMult: function(p) { return window.specials[2033].multiplier ? 20 : 0; },
        onActivation: function(p) {
            if (p.captain.type == "PSY") {
                window.specials[2033].multiplier = true;
            }
            else{
                window.specials[2033].multiplier = false;
            }
        }
    },
    2034: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2034].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Kizaru is your captain',
                name: '2034warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2034].turnedOn[p.slot] = false;
        }
    },
    2035: {
        atk: function(p) { return p.unit.cost <= 40 ? 2 : 1; },
        type: "class"
    },
    2036: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
    },
    2037: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
    },
    2040: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    2041: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    2044: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        type: "class",
    },
    2046: {
        orb: function(p) { return p.unit.type == window.specials[2046].multiType ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2046].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            if (p.colorCount.STR >= 4 || p.colorCount.DEX >= 4 || p.colorCount.QCK >= 4 || p.colorCount.PSY >= 4 || p.colorCount.INT >= 4) {
                window.specials[2046].multiplier = 1.75;
                if (p.colorCount.STR >= 4) {
                    window.specials[2046].multiType = "STR";
                }
                if (p.colorCount.QCK >= 4) {
                    window.specials[2046].multiType = "QCK";
                }
                if (p.colorCount.DEX >= 4) {
                    window.specials[2046].multiType = "DEX";
                }
                if (p.colorCount.PSY >= 4) {
                    window.specials[2046].multiType = "PSY";
                }
                if (p.colorCount.INT >= 4) {
                    window.specials[2046].multiType = "INT";
                }
            }
            else{
                window.specials[2046].multiplier = 1;
                window.specials[2046].multiType = "null";
            }
        }
    },
    2047: {
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    2048: {
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    2049: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    2050: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    2051: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
    },
    2052: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
    },
    2057: {
        atk: function(p) { return p.unit.cost <= 15 ? 1.75 : 1; },
        type: "class"
    },
    2058: {
        orbs: function(p) { return p.unit.cost <= 15 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2059: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        chain: function(p) { return window.specials[2059].multiplier != Infinity ? window.specials[2059].multiplier : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2059].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[2059].multiplier == Infinity ? 1 : window.specials[2059].multiplier == 2.5 ? 2 : window.specials[2059].multiplier == 2.75 ? 3 : 0);
            window.specials[2059].multiplier = [Infinity, 2.5, 2.75, 3][n];
            p.scope.notify({
                text: 'Using the ' + ['Regular ', 2.5, 2.75, 3][n] + 'x chain lock. To switch to the ' + [2.5, 2.75, 3, 'Regular '][n] + 'x chain lock, disable and re-enable this special',
                name: '2059warning'
            });
        },
    },
    2060: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        chain: function(p) { return window.specials[2060].multiplier != Infinity ? window.specials[2060].multiplier : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2060].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[2060].multiplier == Infinity ? 1 : window.specials[2060].multiplier == 2.5 ? 2 : window.specials[2060].multiplier == 2.75 ? 3 : 0);
            window.specials[2060].multiplier = [Infinity, 2.5, 2.75, 3][n];
            p.scope.notify({
                text: 'Using the ' + ['Regular', '2.5x', '2.75x', '3x'][n] + ' chain lock. To switch to the ' + ['2.5x', '2.75x', '3x', 'Regular'][n] + ' chain lock, disable and re-enable this special',
                name: '2060warning'
            });
        },
    },
    2063: {
        atk: function(p) { return p.unit.type == window.specials[2063].captType ? 1.75 : 1; },
        type: "type",
        onActivation: function(p) {
            window.specials[2063].captType = p.captain.type;
        }
    },
    2064: {
        atk: function(p) { return p.unit.type == window.specials[2064].captType ? 1.75 : 1; },
        type: "type",
        onActivation: function(p) {
            window.specials[2064].captType = p.captain.type;
        }
    },
    2067: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        }
    },
    2068: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        }
    },
    2069: {
        delay: function(p) { return 1; },
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    2070: {
        delay: function(p) { return 1; },
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    2071: {
        def: function(p) { return 0.2; },
        chainAddition: function(p) { return 0.6; }
    },
    2072: {
        def: function(p) { return 0.2; },
        chainAddition: function(p) { return 0.6; }
    },
    2073: {
        atk: function(p) { return 2; },
        type: "class"
    },
    2074: {
        atk: function(p) { return 2; },
        type: "class"
    },
    2075: {
        affinity: function(p) { return (window.specials[2075].multiplier && (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven"))) ? 1.75 : 1; },
        orb: function(p) { return (window.specials[2075].multiplier && (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven"))) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            if (p.captain.class.has("Free Spirit") || p.captain.class.has("Cerebral") || p.captain.class.has("Powerhouse") || p.captain.class.has("Driven")) window.specials[2075].multiplier = true;
        },
        onDeactivation: function(p) {
            window.specials[2075].multiplier = false;
        },
    },
    2076: {
        affinity: function(p) { return (window.specials[2076].multiplier && (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven"))) ? 1.75 : 1; },
        orb: function(p) { return (window.specials[2076].multiplier && (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven"))) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            if (p.captain) if (p.captain.class.has("Free Spirit") || p.captain.class.has("Cerebral") || p.captain.class.has("Powerhouse") || p.captain.class.has("Driven")) window.specials[2076].multiplier = true;
        },
        onDeactivation: function(p) {
            window.specials[2076].multiplier = false;
        },
    },
    2077: {
        delay: function(p) { return 1; },
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition"
    },
    2078: {
        delay: function(p) { return 1; },
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition"
    },
    2079: {
        affinity: function(p) { return 1.75; },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection.",
    },
    2080: {
        affinity: function(p) { return 1.75; },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection.",
    },
    2081: {
        atk: function(p) { return 1.75; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection.",
    },
    2082: {
        atk: function(p) { return 1.75; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection.",
    },
    2083: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2084: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2085: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT" ? 1.75 : 1; },
        type: "type"
    },
    2086: {
        atk: function(p) { return p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT" ? 1.75 : 1; },
        type: "type"
    },
    2087: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2087].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Luffy is your captain',
                name: '2087warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2087].turnedOn[p.slot] = false;
        },
        chainAddition: function(p) { return 0.5; }
    },
    2088: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    2089: {
        atk: function(p) { return window.specials[2089].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP == 100 ? 1.5 : 1);
            window.specials[2089].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.5 ? 'equal to' : 'below') + ' 100%, using the ' + n + 'x multiplier.',
                name: '2089warning'
            });
        }
    },
    2091: {
        delay: function(p) { return 1; },
    },
    2092: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2092].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Zoro is your captain',
                name: '2092warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2092].turnedOn[p.slot] = false;
        },
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition",
        def: function(p) { return 0.5; }
    },
    2093: {
        atk: function(p) { return p.delayed > 0 ? 1.5 : 1; },
        type: "condition",
    },
    2096: {
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? window.specials[2096].multiplier : 1; },
        onActivation: function(p) {
            var n = (p.percHP == 100 ? 2 : 1.75);
            window.specials[2096].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'equal to' : 'below') + ' 100%, using the ' + n + 'x multiplier.',
                name: '2096warning'
            });
        }
    },
    2097: {
        affinity: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Driven")) ? window.specials[2097].multiplier : 1; },
        onActivation: function(p) {
            var n = (p.percHP == 100 ? 2 : 1.75);
            window.specials[2097].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'equal to' : 'below') + ' 100%, using the ' + n + 'x multiplier.',
                name: '2097warning'
            });
        }
    },
    2098: {
        chain: function(p) { return 3.25; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.25 : 1;
        }
    },
    2099: {
        chain: function(p) { return 3.25; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.25 : 1;
        }
    },
    2100: {
        atk: function(p) { return window.specials[2100].multiplier; },
        type: "class",
        onActivation: function(p) {
            window.specials[2100].multiplier = 1;
            if (p.captain.type == "STR" || p.captain.type == "QCK") {
                window.specials[2100].multiplier = 1.75;
            }
        }
    },
    2101: {
        atk: function(p) { return window.specials[2101].multiplier; },
        type: "class",
        onActivation: function(p) {
            window.specials[2101].multiplier = 1;
            if (p.captain.type == "STR" || p.captain.type == "QCK") {
                window.specials[2101].multiplier = 1.75;
            }
        }
    },
    2102: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2102].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2102].multiplier = 1;
            if (p.captain.type == "INT" || p.captain.type == "QCK") {
                window.specials[2102].multiplier = 1.75;
            }
        }
    },
    2103: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2103].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2103].multiplier = 1;
            if (p.captain.type == "INT" || p.captain.type == "QCK") {
                window.specials[2103].multiplier = 1.75;
            }
        }
    },
    2104: {
        staticMult: function(p) { return window.specials[2104].multiplier ? 40 : 0; },
        onActivation: function(p) {
            window.specials[2104].multiplier = false;
            if (p.captain.type == "DEX" || p.captain.type == "QCK") {
                window.specials[2104].multiplier = true;
            }
        }
    },
    2105: {
        staticMult: function(p) { return window.specials[2105].multiplier ? 40 : 0; },
        onActivation: function(p) {
            window.specials[2105].multiplier = false;
            if (p.captain.type == "DEX" || p.captain.type == "QCK") {
                window.specials[2105].multiplier = true;
            }
        }
    },
    2108: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 3, [p.friendCaptain, p.captain], p.effectName); },
        affinity: function(p) { return 1.25; },
        atk: function(p) { return 1.25; },
        type: "type",
    },
    2109: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 3, [p.friendCaptain, p.captain], p.effectName); },
        affinity: function(p) { return 1.25; },
        atk: function(p) { return 1.25; },
        type: "type",
    },
    2112: {
        atk: function(p) { return (p.delayed > 0) ? 1.75 : 1; },
        type: "condition",
    },
    2113: {
        atk: function(p) { return (p.delayed > 0) ? 1.75 : 1; },
        type: "condition",
    },
    2114: {
        staticMult: function(p) { return 30; }
    },
    2115: {
        staticMult: function(p) { return 30; }
    },
    2116: {
        def: function(p) { return 0; }
    },
    2117: {
        def: function(p) { return 0; }
    },
    2120: {
        atk: function(p) { return window.specials[2120].multiplier == 2 ? ((p.unit.class.has("Fighter") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")) && (p.delayed > 0)) ? window.specials[2120].multiplier : 1 : (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? window.specials[2120].multiplier : 1; },
        type: "class",
        warning: "For the 2x boost special (%name%) assumes that the enemy is Delayed.",
        onActivation: function(p) {
            var n = window.specials[2120].multiplier == 1.75 ? 1 : 0;
            window.specials[2120].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using ' + [1.75, 2][n] + 'x ATK boost. To switch to the ' + [2, 1.75][n] + 'x ATK boost, disable and re-enable this special.',
                name: '2120warning'
            });
        }
    },
    2121: {
        atk: function(p) { return window.specials[2121].multiplier == 2 ? ((p.unit.class.has("Fighter") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")) && (p.delayed > 0)) ? window.specials[2121].multiplier : 1 : (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? window.specials[2121].multiplier : 1; },
        type: "class",
        warning: "For the 2x boost special (%name%) assumes that the enemy is Delayed.",
        onActivation: function(p) {
            var n = window.specials[2121].multiplier == 1.75 ? 1 : 0;
            window.specials[2121].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using ' + [1.75, 2][n] + 'x ATK boost. To switch to the ' + [2, 1.75][n] + 'x ATK boost, disable and re-enable this special.',
                name: '2121warning'
            });
        }
    },
    2122: {
        def: function(p) { return 0.2; },
        orb: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }
    },
    2123: {
        def: function(p) { return 0.2; },
        orb: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }
    },
    2124: {
        orb: function(p) { return (p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2126: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? window.specials[2126].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.75 : 1);
            window.specials[2126].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'below' : 'above') + ' 50%, using the ' + n + 'x multiplier.',
                name: '2126warning'
            });
        }
    },
    2127: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2128: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2128].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2128].turnedOn = false;
        }
    },
    2129: {
        atk: function(p) { return 1.2; },
        type: "class"
    },
    2131:{
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? window.specials[2131].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2131].multiplier == 1.75 ? 1 : window.specials[2131].multiplier == 2 ? 2 : 0);
            window.specials[2131].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2131warning'
            });
        },
    },
    2132:{
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? window.specials[2132].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2132].multiplier == 1.75 ? 1 : window.specials[2132].multiplier == 2 ? 2 : 0);
            window.specials[2132].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2132warning'
            });
        },
    },
    2135: {
        orb: function(p) { return p.unit.type == "QCK" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },	
    },
    2136: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2136].turnedOn = true;
            p.scope.notify({
                text: 'Only affects captain damage if Crocodile is your captain, use Friend Captain if you don\'t want the additional ATK boost due to Captain Swap',
                name: '2136warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2136].turnedOn = false;
        }
    },
    2137: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2137].turnedOn = true;
            p.scope.notify({
                text: 'Only affects captain damage if Crocodile is your captain, use Friend Captain if you don\'t want the additional ATK boost due to Captain Swap',
                name: '2137warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2137].turnedOn = false;
        }
    },
    2138: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Driven") || p.unit.class.has("Powerhouse")) ? 2 : 1; },
        type: "class",
    },
    2139: {
        atk: function(p) { return window.specials[2139].multiplier; },
        onActivation: function(p) {
            window.specials[2139].multiplier = 1;
            if (p.captain.class.has("Powerhouse")) {
                window.specials[2139].multiplier = 1.75;
            }
        },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been inflicted with Toxic."
    },
    2140: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2140].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2140].multiplier = 1;
            if (p.captain.type == "INT" || p.captain.type == "QCK") {
                window.specials[2140].multiplier = 2;
            }
        }
    },
    2141: {
        chain: function(p) { return window.specials[2141].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2141].multiplier : 1;
        },
        onActivation: function(p) {
            window.specials[2141].multiplier = 1;
            if (p.captain.type == "INT" || p.captain.type == "DEX") {
                window.specials[2141].multiplier = 2.75;
            }
        }
    },
    2142: {
        staticMult: function(p) { return window.specials[2142].multiplier; },
        onActivation: function(p) {
            window.specials[2142].multiplier = 0;
            if (p.captain.type == "INT" || p.captain.type == "STR") {
                window.specials[2142].multiplier = 55;
            }
        }
    },
    2143: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class",
    },
    2144: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class",
    },
    2147: {
        atk: function(p) { return p.unit.class.has("Fighter") ? window.specials[2147].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2.25 : 1);
            window.specials[2147].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.25 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '2147warning'
            });
        }
    },
    2148: {
        atk: function(p) { return p.unit.class.has("Fighter") ? window.specials[2148].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2.25 : 1);
            window.specials[2148].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.25 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '2148warning'
            });
        }
    },
    2149: {
        affinity: function(p) { return !(p.unit.class.has("Fighter")) ? 1 : window.specials[2149].multiplier; },
        onActivation: function(p) {
            if (p.captain.class.has("Fighter")) {
                window.specials[2149].multiplier = 1.75;
            }
            else{
                window.specials[2149].multiplier = 1;
            }
        }
    },
    2150: {
        affinity: function(p) { return !(p.unit.class.has("Fighter")) ? 1 : window.specials[2150].multiplier; },
        onActivation: function(p) {
            if (p.captain.class.has("Fighter")) {
                window.specials[2150].multiplier = 1.75;
            }
            else{
                window.specials[2150].multiplier = 1;
            }
        }
    },
    2159: {
        delay: function(p) { return 1; },
        warning: "Selected special (%name%) assumes that the enemy has been poisoned."
    },
    2160: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2160].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Doflamingo is your captain',
                name: '2160warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2160].turnedOn[p.slot] = false;
        },
        orb: function(p) { return (p.unit.class.has("Shooter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2161: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2161].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Doflamingo is your captain',
                name: '2161warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2161].turnedOn[p.slot] = false;
        },
        orb: function(p) { return (p.unit.class.has("Shooter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2162: {
        delay: function(p) { return window.specials[2162].turnedOn ? 1 : 0; },
        onActivation: function(p) {
            window.specials[2162].turnedOn = p.classCount.Fighter >= 5 ? true : false;
        },
        onDeactivation: function(p) {
            window.specials[2162].turnedOn = false;
        },
    },
    2163: {
        delay: function(p) { return window.specials[2163].turnedOn ? 1 : 0; },
        onActivation: function(p) {
            window.specials[2163].turnedOn = p.classCount.Fighter >= 5 ? true : false;
        },
        onDeactivation: function(p) {
            window.specials[2163].turnedOn = false;
        },
    },
    2164: {
        orb: function(p) { return (p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2165: {
        orb: function(p) { return (p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2168: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2168].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2168].turnedOn[p.slot] = true;
            var n = (window.specials[2168].multiplier == 1.75 ? 1 : window.specials[2168].multiplier == 2 ? 2 : 0);
            window.specials[2168].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Orb boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '2168warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2168].turnedOn[p.slot] = false;
        },
    },
    2169: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2169].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2169].turnedOn[p.slot] = true;
            var n = (window.specials[2169].multiplier == 1.75 ? 1 : window.specials[2169].multiplier == 2 ? 2 : 0);
            window.specials[2169].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Orb boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '2169warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2169].turnedOn[p.slot] = false;
        },
    },
    2170: {
        delay: function(p) { return 1; },
        atk: function(p) { return window.specials[2170].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2170].multiplier == 1.5 ? 1 : 0);
            window.specials[2170].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '2170warning'
            });
        },
    },
    2171: {
        delay: function(p) { return 1; },
        atk: function(p) { return window.specials[2171].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2171].multiplier == 1.5 ? 1 : 0);
            window.specials[2171].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x ATK multiplier. To switch to the ' + [1.75, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '2171warning'
            });
        },
    },
    2172: {
        chainAddition: function(p) { return 0.65; }
    },
    2173: {
        chainAddition: function(p) { return 0.65; }
    },
    2176: {
        chainAddition: function(p) { return window.specials[2176].multiplier; },
        onActivation: function(p) {
            window.specials[2176].multiplier = 0;
            if (p.captain.class.has("Striker")) {
                window.specials[2176].multiplier = .5;
            }
        },
    },
    2177: {
        chainAddition: function(p) { return window.specials[2177].multiplier; },
        onActivation: function(p) {
            window.specials[2177].multiplier = 0;
            if (p.captain.class.has("Striker")) {
                window.specials[2177].multiplier = .5;
            }
        },
    },
    2178: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class",
    },
    2179: {
        affinity: function(p) { return p.unit.type == "STR" ? 1.25 : 1; }
    },
    2182: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? window.specials[2182].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            window.specials[2182].multiplier = 1;
            if (p.colorCount.INT >= 3) {
                window.specials[2182].multiplier = 2;
            }
        }
    },
    2183: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? window.specials[2183].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            window.specials[2183].multiplier = 1;
            if (p.colorCount.INT >= 3) {
                window.specials[2183].multiplier = 2;
            }
        }
    },
    2184: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2184].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2184].multiplier = 1;
            if (p.colorCount.PSY >= 3) {
                window.specials[2184].multiplier = 2;
            }
        }
    },
    2185: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2185].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2185].multiplier = 1;
            if (p.colorCount.PSY >= 3) {
                window.specials[2185].multiplier = 2;
            }
        }
    },
    2186: {
        chain: function(p) { return window.specials[2186].multiplier; },
        chainLimiter: function(p) {
            if (window.specials[2186].multiplier != 1) {
                var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
                return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2186].multiplier : 1;
            }
            else{
                var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
                return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
            }
        },
        onActivation: function(p) {
            window.specials[2186].multiplier = 1;
            if(p.captain) {
                if (p.captain.type == "PSY" || p.captain.type == "INT") {
                    window.specials[2186].multiplier = 3;
                }
            }
        },
    },
    2187: {
        chain: function(p) { return window.specials[2187].multiplier; },
        chainLimiter: function(p) {
            if (window.specials[2187].multiplier != 1) {
                var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
                return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2187].multiplier : 1;
            }
            else{
                var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
                return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
            }
        },
        onActivation: function(p) {
            window.specials[2187].multiplier = 1;
            if(p.captain) {
                if (p.captain.type == "PSY" || p.captain.type == "INT") {
                    window.specials[2187].multiplier = 3;
                }
            }
        },
    },
    2190: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class",
    },
    2191: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class",
    },
    2196: {
        atk: function(p) { return window.specials[2196].multiplier; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 10 ? 2 : 1);
            window.specials[2196].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x ATK boost.',
                name: '2196warning'
            });
        }
    },
    2197: {
        atk: function(p) { return window.specials[2197].multiplier; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 10 ? 2 : 1);
            window.specials[2197].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x ATK boost.',
                name: '2197warning'
            });
        }
    },
    2198: {
        affinity: function(p) { return window.specials[2198].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[2198].multiplier == 1.5 ? 1 : 0);
            window.specials[2198].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x affinity boost. To switch to the ' + [1.75, 1.5][n] + 'x affinity boost, disable and re-enable this special',
                name: '2198warning'
            });
        }
    },
    2199: {
        affinity: function(p) { return window.specials[2199].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[2199].multiplier == 1.5 ? 1 : 0);
            window.specials[2199].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + 'x affinity boost. To switch to the ' + [1.75, 1.5][n] + 'x affinity boost, disable and re-enable this special',
                name: '2199warning'
            });
        }
    },
    2204: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2204].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP <= 10 ? 2 : 1);
            window.specials[2204].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x Orb boost.',
                name: '2204warning'
            });
        }
    },
    2205: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2205].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP <= 10 ? 2 : 1);
            window.specials[2205].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + n + 'x Orb boost.',
                name: '2205warning'
            });
        }
    },
    2206:{
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT") ? window.specials[2206].multiplier : 1; },
        type: "class",
        def: function(p) { return 0; },
        onActivation: function(p) {
            var n = (window.specials[2206].multiplier == 1 ? 1 : window.specials[2206].multiplier == 1.75 ? 2 : window.specials[2206].multiplier == 2 ? 3 : 0);
            window.specials[2206].multiplier = [1, 1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1, 1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [1.75, 2, 2.25, 1][n] + 'x ATK boost, disable and re-enable this special',
                name: '2207warning'
            });
        },
    },
    2207:{
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "INT") ? window.specials[2207].multiplier : 1; },
        type: "class",
        def: function(p) { return 0; },
        onActivation: function(p) {
            var n = (window.specials[2207].multiplier == 1 ? 1 : window.specials[2207].multiplier == 1.75 ? 2 : window.specials[2207].multiplier == 2 ? 3 : 0);
            window.specials[2207].multiplier = [1, 1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1, 1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [1.75, 2, 2.25, 1][n] + 'x ATK boost, disable and re-enable this special',
                name: '2207warning'
            });
        },
    },
    2214: {
        delay: function(p) { return 1; },
    },
    2215: {
        delay: function(p) { return 1; },
    },
    2216: {
        rcv: function(p) { return 1.5; },
    },
    2217: {
        rcv: function(p) { return 1.5; },
    },
    2218: {
        chain: function(p) { return window.specials[2218].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2218].multiplier == 2.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2218].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[2218].multiplier = 1;
            if (p.captain.class.has("Cerebral")) {
                window.specials[2218].multiplier = 2.5;
            }
        },
    },
    2219: {
        chain: function(p) { return window.specials[2219].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2219].multiplier == 2.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2219].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[2219].multiplier = 1;
            if (p.captain.class.has("Cerebral")) {
                window.specials[2219].multiplier = 2.5;
            }
        },
    },
    2222: {
        atk: function(p) { return 1.25; },
        type: "type"
    },
    2223: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName); }
    },
    2224: {
        chainAddition: function(p) { return 0.25; }
    },
    2225: {
        affinity: function(p) { return 1.25; }
    },
    2226: {
        staticMult: function(p) { return 2.5; }
    },
    2227: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2227].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2227].turnedOn = false;
        },
    },
    2229: {
        affinity: function(p) { return p.unit.class.has("Shooter") ? window.specials[2229].multiplier : 1; },
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 1.5 : 1);//change this
            window.specials[2229].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1 ? 'below' : 'above') + ' 50%, using the ' + n + 'x multiplier.',//change this
                name: '2229warning'
            });
        }
    },
    2230: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
        chainAddition: function(p) { return 0.4; }
    },
    2233: {
        atk: function(p) { return window.specials[2233].multiplier ? p.slot < 2 ? 2 : 1 : p.slot == p.sourceSlot ? 2 : 1; },
        type: "class",
        orb: function(p) { return window.specials[2233].multiplier ? (p.slot < 2) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName) : p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2233].multiplier = (p.slot < 2 ? true : false);
        }
    },
    2234: {
        atk: function(p) { return window.specials[2234].multiplier ? p.slot < 2 ? 2 : 1 : p.slot == p.sourceSlot ? 2 : 1; },
        type: "class",
        orb: function(p) { return window.specials[2234].multiplier ? (p.slot < 2) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName) : p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2234].multiplier = (p.slot < 2 ? true : false);
        }
    },
    2235: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2235].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2235].turnedOn = false;
        }
    },
    2236: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2236].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2236].turnedOn = false;
        }
    },
    2239: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; }
    },
    2240: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; }
    },
    2241: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2242: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2245: {
        chainAddition: function(p) { return 0.8; }
    },
    2246: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    2247: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    2248: {
        turnedOn: false,
        affinity: function(p) { return window.specials[2248].multiplier == 2 ? 1.5 : window.specials[2248].multiplier == 3 ? 1.75 : 1; },
        chainAddition: function(p) { return window.specials[2248].multiplier == 0 ? .5 : window.specials[2248].multiplier == 1 ? .8 : 0; },
        delay: function(p) { return window.specials[2248].multiplier == 0 ? 1 : window.specials[2248].multiplier == 1 ? 2 : 0; },
        onActivation: function(p) {
            var n = window.specials[2248].multiplier != null ? (window.specials[2248].multiplier + 1) % 4 : 0;
            window.specials[2248].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['4 STR and DEX orbs Stage 1', '4 STR and DEX orbs Stage 2', '4 PSY and INT orbs Stage 1', '4 PSY and INT orbs Stage 2'][n] + ' special. To switch to the ' + ['4 STR and DEX orbs Stage 2', '4 PSY and INT orbs Stage 1', '4 PSY and INT orbs Stage 2', '4 STR and DEX orbs Stage 1'][n] + ' special, disable and re-enable this special',
                name: '2249warning'
            });
            window.specials[2248].turnedOn = n > 1 ? true : false;
        },
        onDeactivation: function(p) {
            window.specials[2248].turnedOn = false;
        }
    },
    2249: {
        turnedOn: false,
        affinity: function(p) { return window.specials[2249].multiplier == 2 ? 1.5 : window.specials[2249].multiplier == 3 ? 1.75 : 1; },
        chainAddition: function(p) { return window.specials[2249].multiplier == 0 ? .5 : window.specials[2249].multiplier == 1 ? .8 : 0; },
        delay: function(p) { return window.specials[2249].multiplier == 0 ? 1 : window.specials[2249].multiplier == 1 ? 2 : 0; },
        onActivation: function(p) {
            var n = window.specials[2249].multiplier != null ? (window.specials[2249].multiplier + 1) % 4 : 0;
            window.specials[2249].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['4 STR and DEX orbs Stage 1', '4 STR and DEX orbs Stage 2', '4 PSY and INT orbs Stage 1', '4 PSY and INT orbs Stage 2'][n] + ' special. To switch to the ' + ['4 STR and DEX orbs Stage 2', '4 PSY and INT orbs Stage 1', '4 PSY and INT orbs Stage 2', '4 STR and DEX orbs Stage 1'][n] + ' special, disable and re-enable this special',
                name: '2249warning'
            });
            window.specials[2249].turnedOn = n > 1 ? true : false;
        },
        onDeactivation: function(p) {
            window.specials[2249].turnedOn = false;
        }
    },
    2250: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    2251: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    2252: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2252].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Pound is your captain',
                name: '2252warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2252].turnedOn[p.slot] = false;
        },
        orb: function(p) { return (p.slot >= 2) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2253: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2253].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Pound is your captain',
                name: '2253warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2253].turnedOn[p.slot] = false;
        },
        orb: function(p) { return (p.slot >= 2) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2256:{
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit")) ? window.specials[2256].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2256].multiplier == 1.75 ? 1 : window.specials[2256].multiplier == 2 ? 2 : 0);
            window.specials[2256].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2256warning'
            });
        },
    },
    2260: {
        staticMult: function(p) { return 60; }
    },
    2261: {
        staticMult: function(p) { return 60; }
    },
    2264: {
        turnedOn: false,
        onActivation: function(p) {
            if(window.specials[2264].multiplier == 2.25) {
                window.specials[2264].turnedOn = true;
            }
        },
        onDeactivation: function(p) {
            window.specials[2264].turnedOn = false;
        },
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? window.specials[2264].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2264].multiplier == 1.75 ? 1 : 0);
            window.specials[2264].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2264warning'
            });
        }
    },
    2265: {
        turnedOn: false,
        onActivation: function(p) {
            if(window.specials[2265].multiplier == 2.25) {
                window.specials[2265].turnedOn = true;
            }
        },
        onDeactivation: function(p) {
            window.specials[2265].turnedOn = false;
        },
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? window.specials[2265].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2265].multiplier == 1.75 ? 1 : 0);
            window.specials[2265].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2265warning'
            });
        }
    },
    2266: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    2267: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    2270: {
        chainAddition: function(p) { return 0.7; }
    },
    2271: {
        chainAddition: function(p) { return 0.7; }
    },
    2272: {
        atk: function(p) { return p.defenseDown ? window.specials[2272].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2272].multiplier = p.captain.class.has("Powerhouse") ? 1.75 : 1;
        },
        def: function(p) { return 0; }
    },
    2273: {
        atk: function(p) { return p.defenseDown ? window.specials[2273].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2273].multiplier = p.captain.class.has("Powerhouse") ? 1.75 : 1;
        },
        def: function(p) { return 0; }
    },
    2274: {
        atk: function(p) { return (p.delayed > 0 && window.specials[2274].multiplier != 0) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2274].multiplier == 1 ? 2 : (window.specials[2274].multiplier == 2 | window.specials[2274].multiplier == undefined) ? 0 : 1);
            window.specials[2274].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Delay', 'Conditional boost', 'Conditional boost and Delay'][n] + '. To switch to the ' + ['Conditional boost', 'Conditional boost and Delay', 'Delay'][n] + ', disable and re-enable this special',
                name: '2274warning'
            });
        },
        delay: function(p) { return window.specials[2274].multiplier != 1 ? 1 : 0; },
    },
    2275: {
        atk: function(p) { return (p.delayed > 0 && window.specials[2275].multiplier != 0) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2275].multiplier == 1 ? 2 : (window.specials[2275].multiplier == 2 | window.specials[2275].multiplier == undefined) ? 0 : 1);
            window.specials[2275].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Delay', 'Conditional boost', 'Conditional boost and Delay'][n] + '. To switch to the ' + ['Conditional boost', 'Conditional boost and Delay', 'Delay'][n] + ', disable and re-enable this special',
                name: '2275warning'
            });
        },
        delay: function(p) { return window.specials[2275].multiplier != 1 ? 1 : 0; },
    },
    2276: {
        atk: function(p) { return p.unit.stars <= 4 ? 1.75 : 1; },
        type: "type",
        delay: function(p) { return 1; },
    },
    2277: {
        atk: function(p) { return p.unit.stars <= 4 ? 1.75 : 1; },
        type: "type",
        delay: function(p) { return 1; },
    },
    2280: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? window.specials[2280].multiplier : 1; },
        onActivation: function(p) {
            if (p.colorCount.DEX >= 3) window.specials[2280].multiplier = 2;
            else window.specials[2280].multiplier = 1;
        },
    },
    2281: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? window.specials[2281].multiplier : 1; },
        onActivation: function(p) {
            if (p.colorCount.DEX >= 3) window.specials[2281].multiplier = 2;
            else window.specials[2281].multiplier = 1;
        },
    },
    2282: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
    },
    2283: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
    },
    2284: {
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2285: {
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2286: {
        atk: function(p) { return p.unit.type == "STR" ? window.specials[2286].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2286].multiplier == 1.75 ? 1 : 0);
            window.specials[2286].multiplier = (p.captain.class.has("Powerhouse") || p.captain.class.has("Striker")) ? [1.75, 2.25][n] : 1;
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2286warning'
            });
        },
    },
    2287: {
        atk: function(p) { return p.unit.type == "STR" ? window.specials[2287].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2287].multiplier == 1.75 ? 1 : 0);
            window.specials[2287].multiplier = (p.captain.class.has("Powerhouse") || p.captain.class.has("Striker")) ? [1.75, 2.25][n] : 1;
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2287warning'
            });
        },
    },
    2288: {
        rcv: function(p) { return window.specials[2288].multiplier != 0 ? 1.5 : 1; },
        staticMult: function(p) { return window.specials[2288].multiplier != 1 ? 45 : 0; },
        onActivation: function(p) {
            var n = (window.specials[2288].multiplier == 1 ? 2 : (window.specials[2288].multiplier == 2 | window.specials[2288].multiplier == undefined) ? 0 : 1);
            window.specials[2288].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Sabo Buff', 'RCV boost', 'RCV boost and Sabo Buff'][n] + '. To switch to the ' + ['RCV boost', 'RCV boost and Sabo Buff', 'Sabo Buff'][n] + ', disable and re-enable this special',
                name: '2288warning'
            });
        },
    },
    2289: {
        rcv: function(p) { return window.specials[2289].multiplier != 0 ? 1.5 : 1; },
        staticMult: function(p) { return window.specials[2289].multiplier != 1 ? 45 : 0; },
        onActivation: function(p) {
            var n = (window.specials[2289].multiplier == 1 ? 2 : (window.specials[2289].multiplier == 2 | window.specials[2289].multiplier == undefined) ? 0 : 1);
            window.specials[2289].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Sabo Buff', 'RCV boost', 'RCV boost and Sabo Buff'][n] + '. To switch to the ' + ['RCV boost', 'RCV boost and Sabo Buff', 'Sabo Buff'][n] + ', disable and re-enable this special',
                name: '2289warning'
            });
        },
    },
    2290: {
        rcv: function(p) { return window.specials[2290].multiplier != 0 ? 1.5 : 1; },
        staticMult: function(p) { return window.specials[2290].multiplier != 1 ? 45 : 0; },
        onActivation: function(p) {
            var n = (window.specials[2290].multiplier == 1 ? 2 : (window.specials[2290].multiplier == 2 | window.specials[2290].multiplier == undefined) ? 0 : 1);
            window.specials[2290].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Sabo Buff', 'RCV boost', 'RCV boost and Sabo Buff'][n] + '. To switch to the ' + ['RCV boost', 'RCV boost and Sabo Buff', 'Sabo Buff'][n] + ', disable and re-enable this special',
                name: '2290warning'
            });
        },
    },
    2293: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? window.specials[2293].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            if (p.captain.class.has("Cerebral")) window.specials[2293].multiplier = 1.5;
            else window.specials[2293].multiplier = 1;
        }
    },
    2294: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? window.specials[2294].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            if (p.captain.class.has("Cerebral")) window.specials[2294].multiplier = 1.5;
            else window.specials[2294].multiplier = 1;
        }
    },
    2296: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2296].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        chainAddition: function(p) { return 0.5; },
        onActivation: function(p) {
            var n = (window.specials[2296].multiplier == 1 ? 1 : window.specials[2296].multiplier == 1.75 ? 2 : window.specials[2296].multiplier == 2 ? 3 : 0);
            window.specials[2296].multiplier = [1, 1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1, 1.75, 2, 2.25][n] + 'x orb boost. To switch to the ' + [1.75, 2, 2.25, 1][n] + 'x orb boost, disable and re-enable this special',
                name: '2296warning'
            });
        },
    },
    2298: {
        def: function(p) { return 0.2 },
        atk: function(p) { return (p.defenseDown > 0 && window.specials[2298].multiplier != 1) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2298].multiplier == 1 ? 2 : (window.specials[2298].multiplier == 2 | window.specials[2298].multiplier == undefined) ? 0 : 1);
            window.specials[2298].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Conditional boost', 'Orb boost', 'Conditional boost and Orb boost'][n] + '. To switch to the ' + ['Orb boost', 'Conditional boost and Orb boost', 'Conditional boost'][n] + ', disable and re-enable this special',
                name: '2298warning'
            });
        },
        orb: function(p) { return (window.specials[2298].multiplier != 0 && p.unit.class.has("Shooter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2299: {
        def: function(p) { return 0.2 },
        atk: function(p) { return (p.defenseDown > 0 && window.specials[2299].multiplier != 1) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2299].multiplier == 1 ? 2 : (window.specials[2299].multiplier == 2 | window.specials[2299].multiplier == undefined) ? 0 : 1);
            window.specials[2299].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Conditional boost', 'Orb boost', 'Conditional boost and Orb boost'][n] + '. To switch to the ' + ['Orb boost', 'Conditional boost and Orb boost', 'Conditional boost'][n] + ', disable and re-enable this special',
                name: '2299warning'
            });
        },
        orb: function(p) { return (window.specials[2299].multiplier != 0 && p.unit.class.has("Shooter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2300: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Fighter") ? window.specials[2300].multiplier : 1},
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2300].multiplier == 2 ? 1 : 0);
            window.specials[2300].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x ATK boost. To switch to the ' + [2.25, 2][n] + 'x ATK boost, disable and re-enable this special',
                name: '2296warning'
            });
        },
    },
    2301: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        type: "class"
    },
    2302: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
        type: "class"
    },
    2305: {
        atk: function(p) { return window.specials[2305].multiplier ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2305].multiplier = false;
            if(p.captain) {
                if (p.captain.class.has("Cerebral") || p.captain.class.has("Slasher")) {
                    window.specials[2305].multiplier = true;
                }
            }
        },
        warning: "Selected special (%name%) assumes that the enemy has been poisoned or STRONGLY Poisoned."
    },
    2306: {
        atk: function(p) { return window.specials[2306].multiplier ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2306].multiplier = false;
            if(p.captain) {
                if (p.captain.class.has("Cerebral") || p.captain.class.has("Slasher")) {
                    window.specials[2306].multiplier = true;
                }
            }
        },
        warning: "Selected special (%name%) assumes that the enemy has been poisoned or STRONGLY Poisoned."
    },
    2309: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2309].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2309].turnedOn = false;
        }
    },
    2310: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2310].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2310].turnedOn = false;
        }
    },
    2317: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2318: {
        chainAddition: function(p) { return 0.5; },
        onActivation: function(p) {
            window.specials[2318].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2318].turnedOn = false;
        }
    },
    2322: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2323: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2324: {
        chainAddition: function(p) { return 0.75; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2324].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2324].turnedOn = false;
        },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."        
    },
    2325: {
        chainAddition: function(p) { return 0.75; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2325].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2325].turnedOn = false;
        },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."        
    },
    2328: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class"
    },
    2329: {
        staticMult: function(p) { return 50; }
    },
    2330: {
        staticMult: function(p) { return 50; }
    },
    2333: {
        delay: function(p) { return 1; },
        orb: function(p) { return (p.unit.class.has("Shooter") && window.specials[2333].multiplier) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            if (window.specials[2333].multiplier == null) {
                window.specials[2333].multiplier = true;
            }
            else{
                window.specials[2333].multiplier = !window.specials[2333].multiplier;
            }
            p.scope.notify({
                text: (window.specials[2333].multiplier ? 'En' : 'Dis') + 'abling the orb boost. Enemy with highest MAX HP is ' + (window.specials[2334].multiplier ? 'Under or equal to ' : 'Over ') + '80% HP',
                name: '2333warning'
            });
        }
    },
    2334: {
        delay: function(p) { return 1; },
        orb: function(p) { return (p.unit.class.has("Shooter") && window.specials[2334].multiplier) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            if (window.specials[2334].multiplier == null) {
                window.specials[2334].multiplier = true;
            }
            else{
                window.specials[2334].multiplier = !window.specials[2334].multiplier;
            }
            p.scope.notify({
                text: (window.specials[2334].multiplier ? 'En' : 'Dis') + 'abling the orb boost. Enemy with highest MAX HP is ' + (window.specials[2334].multiplier ? 'under or equal to ' : 'over ') + '80% HP',
                name: '2334warning'
            });
        }
    },
    2335: {
        chainAddition: function(p) { return 0.7; }
    },
    2336: {
        chainAddition: function(p) { return 0.7; }
    },
    2337: {
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2338: {
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2339: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? window.specials[2339].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2339].multiplier == 1.5 ? 1 : 0);
            window.specials[2339].multiplier = [1.5, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '2239warning'
            });
        },
    },
    2340: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? window.specials[2340].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2340].multiplier == 1.5 ? 1 : 0);
            window.specials[2340].multiplier = [1.5, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '2340warning'
            });
        },
    },
    2341: {
        affinity: function(p) { return ((p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) && window.specials[2341].multiplier != 0) ? 1.75 : 1; },
        orb: function(p) { return ((p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) && window.specials[2341].multiplier != 1) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2341].multiplier == 1 ? 2 : (window.specials[2341].multiplier == 2 | window.specials[2341].multiplier == undefined) ? 0 : 1);
            window.specials[2341].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Orb boost', 'Affinity boost', 'Affinity boost and Orb boost'][n] + '. To switch to the ' + ['Affinity boost', 'Affinity boost and Orb boost', 'Orb boost'][n] + ', disable and re-enable this special',
                name: '2341warning'
            });
        },
    },
    2342: {
        affinity: function(p) { return ((p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) && window.specials[2342].multiplier != 0) ? 1.75 : 1; },
        orb: function(p) { return ((p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) && window.specials[2342].multiplier != 1) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2342].multiplier == 1 ? 2 : (window.specials[2342].multiplier == 2 | window.specials[2342].multiplier == undefined) ? 0 : 1);
            window.specials[2342].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Orb boost', 'Affinity boost', 'Affinity boost and Orb boost'][n] + '. To switch to the ' + ['Affinity boost', 'Affinity boost and Orb boost', 'Orb boost'][n] + ', disable and re-enable this special',
                name: '2342warning'
            });
        },
    },
    2343: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class"
    },
    2344: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class"
    },
    2345: {
        delay: function(p) { return 1; },
        chain: function(p) { return window.specials[2345].multiplier; },
        chainLimiter: function(p) {
            if (window.specials[2345].multiplier != 1) {
                var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
                return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2345].multiplier : 1;
            }
            else{
                var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
                return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
            }
        },
        onActivation: function(p) {
            window.specials[2345].multiplier = 1;
            if(p.captain) {
                if (p.captain.type == "QCK" || p.captain.type == "INT") {
                    window.specials[2345].multiplier = 3;
                }
            }
        },
    },
    2346: {
        delay: function(p) { return 1; },
        chain: function(p) { return window.specials[2346].multiplier; },
        chainLimiter: function(p) {
            if (window.specials[2346].multiplier != 1) {
                var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
                return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2346].multiplier : 1;
            }
            else{
                var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
                return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
            }
        },
        onActivation: function(p) {
            window.specials[2346].multiplier = 1;
            if(p.captain) {
                if (p.captain.type == "QCK" || p.captain.type == "INT") {
                    window.specials[2346].multiplier = 3;
                }
            }
        },
    },
    2347: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type",
    },
    2348: {
        def: function(p) { return 0; },
        atk: function(p) { return (window.specials[2348].turnedOn && p.defenseDown) ? 2 : 1 },
        type: "condition",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2348].turnedOn = p.classCount.Slasher >= 5 ? true : false;
        },       
    },
    2349: {
        def: function(p) { return 0; },
        atk: function(p) { return (window.specials[2349].turnedOn && p.defenseDown) ? 2 : 1 },
        type: "condition",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2349].turnedOn = p.classCount.Slasher >= 5 ? true : false;
        },       
    },
    2351: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 1.3 : 1; },
    },
    2353: {
        def: function(p) { return (window.specials[2353].multiplier == 1.75) ? 0 : 1; },
        atk: function(p) { return window.specials[2353].multiplier; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2353].multiplier == 1.5 ? 1 : 0);
            window.specials[2353].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + ' Conditional Boost. To switch to the ' + [1.75, 1.5][n] + ' Conditional Boost, disable and re-enable this special. <br>Selected special assumes that the enemy has been ' + ['Poisoned', 'Poisoned or Strongly Poisoned'][n] + '.',
                name: '2353warning'
            });
        },
    },
    2354: {
        def: function(p) { return (window.specials[2354].multiplier == 1.75) ? 0 : 1; },
        atk: function(p) { return window.specials[2354].multiplier; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2354].multiplier == 1.5 ? 1 : 0);
            window.specials[2354].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75][n] + ' Conditional Boost. To switch to the ' + [1.75, 1.5][n] + ' Conditional Boost, disable and re-enable this special. <br>Selected special assumes that the enemy has been ' + ['Poisoned', 'Poisoned or Strongly Poisoned'][n] + '.',
                name: '2354warning'
            });
        },
    },
    2355: {
        orb: function(p) { return (p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2356: {
        orb: function(p) { return (p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2357: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)}
    },
    2358:{
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker")) ? window.specials[2358].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2358].multiplier == 1.75 ? 1 : window.specials[2358].multiplier == 2 ? 2 : 0);
            window.specials[2358].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2131warning'
            });
        },
    },
    2359: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 1.75 : 1; }
    },
    2363: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [1.5, 1.75, 2][window.specials[2363].multiplier], [p.friendCaptain, p.captain], p.effectName); },
        chainAddition: function(p) { return [.3, .7, .7][window.specials[2363].multiplier]; },
        turnedOn: false,
        onActivation: function(p) {
            if (p.sourceSlot < 2) window.specials[2363].turnedOn = true;
            var n = (window.specials[2363].multiplier == 1 ? 2 : (window.specials[2363].multiplier == 2 | window.specials[2363].multiplier == undefined) ? 0 : 1);
            window.specials[2363].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['0.3 Chain boost and 1.5x orb boost', '0.7 Chain boost and 1.75x orb boost', '0.7 Chain boost and 2x orb boost'][n] + ' special. To switch to the ' + ['0.7 Chain boost and 1.75x orb boost', '0.7 Chain boost and 2x orb boost', '0.3 Chain boost and 1.5x orb boost'][n] + ', disable and re-enable this special',
                name: '2363warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2363].turnedOn = false;
        }
    },
    2364: {
        staticMult: function(p) { return Math.min(p.damageCounter,2000000) * 15; }
    },
    2365: {
        staticMult: function(p) { return Math.min(p.damageCounter,2000000) * 15; }
    },
    2366: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Shooter") || p.unit.class.has("Driven") || p.unit.class.has("Powerhouse")) ? 1.75 : 1; },
        type: "class",
    },
    2367: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Shooter") || p.unit.class.has("Driven") || p.unit.class.has("Powerhouse")) ? 1.75 : 1; },
        type: "class",
    },
    2368: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? window.specials[2368].multiplier : 1; },
        onActivation: function(p) {
            window.specials[2368].multiplier = 1;
            if (p.captain.type == "STR" || p.captain.type == "PSY") {
                window.specials[2368].multiplier = 1.75;
            }
        }
    },
    2369: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? window.specials[2369].multiplier : 1; },
        onActivation: function(p) {
            window.specials[2369].multiplier = 1;
            if (p.captain.type == "STR" || p.captain.type == "PSY") {
                window.specials[2369].multiplier = 1.75;
            }
        }
    },
    2370: {
        onActivation: function(p) {
            window.specials[2370].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2370].turnedOn = false;
        }
    },
    2371: {
        onActivation: function(p) {
            window.specials[2371].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2371].turnedOn = false;
        }
    },
    2372: {
        staticMult: function(p) { return 130; }
    },
    2373: {
        onActivation: function(p) {
            window.specials[2371].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2371].turnedOn = false;
        }
    },
    2374: {
        turnedOn: false,
        affinity: function(p) { return window.specials[2374].multiplier && (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1.75 : 1; },
        onActivation: function(p) {
            window.specials[2374].turnedOn = true;
            window.specials[2374].multiplier = false;
            if(p.captain) {
                if (p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) {
                    window.specials[2374].multiplier = true;
                }
            }
        },
        onDeactivation: function(p) {
            window.specials[2374].turnedOn = false;
        }
    },
    2375: {
        turnedOn: false,
        affinity: function(p) { return window.specials[2375].multiplier && (p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1.75 : 1; },
        onActivation: function(p) {
            window.specials[2375].turnedOn = true;
            window.specials[2375].multiplier = false;
            if(p.captain) {
                if (p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) {
                    window.specials[2375].multiplier = true;
                }
            }
        },
        onDeactivation: function(p) {
            window.specials[2375].turnedOn = false;
        }
    },
    2376: {
        atk: function(p) { return p.slot < 2 ? 1.75 : 1; },
        type: "class",
    },
    2377: {
        atk: function(p) { return p.slot < 2 ? 1.75 : 1; },
        type: "class",
    },
    2378: {
        rcv: function(p) { return 1.5; },
    },
    2379: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "class",
    },
    2380: {
        //TODO
        hit: function(n,p) { return (n > 12 && (p.unit.class.has("Driven") || p.unit.class.has("Powerhouse"))) ? 2.25 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '2380warning'
            });
        }
    },
    2381: {
        //TODO
        hit: function(n,p) { return (n > 12 && (p.unit.class.has("Driven") || p.unit.class.has("Powerhouse"))) ? 2.25 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '2381warning'
            });
        }
    },
    2383:{
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "PSY") ? window.specials[2383].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2383].multiplier == 1.75 ? 1 : window.specials[2383].multiplier == 2 ? 2 : 0);
            window.specials[2383].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2383warning'
            });
        },
    },
    2384: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        affinity: function(p) { return window.specials[2384].multiplier ? 1.5 : 1; },
        onActivation: function(p) {
            window.specials[2384].multiplier = false;
            if (p.captain.type == "STR" || p.captain.type == "PSY") {
                window.specials[2384].multiplier = true;
            }
        }
    },
    2386: {
        atk: function(p) { return p.slot == p.sourceSlot ? 3.25 : 1; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    2387: {
        atk: function(p) { return p.slot == p.sourceSlot ? 3.25 : 1; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    2389: {
        atk: function(p) { return 1.3; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.3, [p.friendCaptain, p.captain], p.effectName); },
    },
    2391: {
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }
    },
    2393: {
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2393].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2.25 : 2);
            window.specials[2393].multiplier = n;
        }
    },
    2394: {
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2394].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2.25 : 2);
            window.specials[2394].multiplier = n;
        }
    },
    2398: {
        orb: function(p) { return (p.unit.class.has("Shooter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: [ false, false, false, false, false, false ],
        multiplier: true,
        onActivation: function(p) {
            window.specials[2398].turnedOn[p.slot] = window.specials[2398].multiplier ? true : false;
            if (window.specials[2398].multiplier){
                p.scope.notify({
                    text: 'Only affects damage if Big Emperor is your captain, to use turn 2 Orb boost only, disable and re-enable the special',
                    name: '2398warning'
                });
            }
            window.specials[2398].multiplier = !window.specials[2398].multiplier;
        },
        onDeactivation: function(p) {
            window.specials[2398].turnedOn[p.slot] = false;
        }
    },
    2400: {
        atk: function(p) { return p.unit.type == "STR" ? window.specials[2400].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.DEX + p.colorCount.QCK >= 2) {
                window.specials[2400].multiplier = 2.25;
            }
            else{
                window.specials[2400].multiplier = 1.75;
            }
            p.scope.notify({
                text: 'Using the ' + window.specials[2400].multiplier + 'x ATK multiplier.',
                name: '2400warning'
            });
        }
    },
    2401: {
        atk: function(p) { return p.unit.type == "STR" ? window.specials[2401].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.DEX + p.colorCount.QCK >= 2) {
                window.specials[2401].multiplier = 2.25;
            }
            else{
                window.specials[2401].multiplier = 1.75;
            }
            p.scope.notify({
                text: 'Using the ' + window.specials[2401].multiplier + 'x ATK multiplier.',
                name: '2401warning'
            });
        }
    },
    2402: {
        atk: function(p) { return p.unit.type == "DEX" ? window.specials[2402].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.QCK >= 2) {
                window.specials[2402].multiplier = 2.25;
            }
            else{
                window.specials[2402].multiplier = 1.75;
            }
            p.scope.notify({
                text: 'Using the ' + window.specials[2402].multiplier + 'x ATK multiplier.',
                name: '2402warning'
            });
        }
    },
    2403: {
        atk: function(p) { return p.unit.type == "DEX" ? window.specials[2403].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.QCK >= 2) {
                window.specials[2403].multiplier = 2.25;
            }
            else{
                window.specials[2403].multiplier = 1.75;
            }
            p.scope.notify({
                text: 'Using the ' + window.specials[2403].multiplier + 'x ATK multiplier.',
                name: '2403warning'
            });
        }
    },
    2404: {
        atk: function(p) { return p.unit.type == "QCK" ? window.specials[2404].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.DEX >= 2) {
                window.specials[2404].multiplier = 2.25;
            }
            else{
                window.specials[2404].multiplier = 1.75;
            }
            p.scope.notify({
                text: 'Using the ' + window.specials[2404].multiplier + 'x ATK multiplier.',
                name: '2404warning'
            });
        }
    },
    2405: {
        atk: function(p) { return p.unit.type == "QCK" ? window.specials[2405].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.DEX >= 2) {
                window.specials[2405].multiplier = 2.25;
            }
            else{
                window.specials[2405].multiplier = 1.75;
            }
            p.scope.notify({
                text: 'Using the ' + window.specials[2405].multiplier + 'x ATK multiplier.',
                name: '2405warning'
            });
        }
    },
    2406: {
        atk: function(p) { return 1.75; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
        chainAddition: function(p) { return window.specials[2406].multiplier ? 0.7 : 0; },
        onActivation: function(p) {
            if (window.specials[2406].multiplier == null) {
                window.specials[2406].multiplier = true;
            }
            else{
                window.specials[2406].multiplier = !window.specials[2406].multiplier;
            }
            p.scope.notify({
                text: (window.specials[2406].multiplier ? 'En' : 'Dis') + 'abling the chain boost.',
                name: '2406warning'
            });
        }
    },
    2407: {
        atk: function(p) { return 1.75; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
        chainAddition: function(p) { return window.specials[2407].multiplier ? 0.7 : 0; },
        onActivation: function(p) {
            if (window.specials[2407].multiplier == null) {
                window.specials[2407].multiplier = true;
            }
            else{
                window.specials[2407].multiplier = !window.specials[2407].multiplier;
            }
            p.scope.notify({
                text: (window.specials[2407].multiplier ? 'En' : 'Dis') + 'abling the chain boost.',
                name: '2407warning'
            });
        }
    },
    2415: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2415].turnedOn = true;
            p.scope.notify({
                text: 'Only affects captain damage if Pica is your captain, use Friend Captain if you don\'t want the additional ATK boost due to Captain Swap',
                name: '2415warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2415].turnedOn = false;
        }
    },
    2416: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2416].turnedOn = true;
            p.scope.notify({
                text: 'Only affects captain damage if Pica is your captain, use Friend Captain if you don\'t want the additional ATK boost due to Captain Swap',
                name: '2416warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2416].turnedOn = false;
        }
    },
    2419: {
        turnedOn: false,
        delay: function(p) { return 2; },
        chain: function(p) { return window.specials[2419].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2419].multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2419].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var n = window.specials[2419].turnedOn; var m = n ? 1 : 0;
            window.specials[2419].multiplier = !n ? (p.captain.type == "DEX" || p.captain.type == "INT") ? 2.75 : (p.captain.type == "QCK" || p.captain.type == "PSY") ? 3 : 1 : 1;
            p.scope.notify({
                text: ['Enabling', 'Disabling'][m] + ' the chain lock. To switch to the chain buff ' + ['off', 'on'][m] + ', disable and re-enable this special',
                name: '2419warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2419].turnedOn = !window.specials[2419].turnedOn;
        }
    },
    2420: {
        turnedOn: false,
        delay: function(p) { return 2; },
        chain: function(p) { return window.specials[2420].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2420].multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2420].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var n = window.specials[2420].turnedOn; var m = n ? 1 : 0;
            window.specials[2420].multiplier = !n ? (p.captain.type == "DEX" || p.captain.type == "INT") ? 2.75 : (p.captain.type == "QCK" || p.captain.type == "PSY") ? 3 : 1 : 1;
            p.scope.notify({
                text: ['Enabling', 'Disabling'][m] + ' the chain lock. To switch to the chain buff ' + ['off', 'on'][m] + ', disable and re-enable this special',
                name: '2420warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2420].turnedOn = !window.specials[2420].turnedOn;
        }
    },
    2421: {
        atk: function(p) { return (p.delayed > 0 && window.specials[2421].multiplier) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2421].multiplier = false;
            if (p.captain) if (p.captain.class.has("Driven") || p.captain.class.has("Powerhouse")) window.specials[2421].multiplier = true;
            else window.specials[2421].multiplier = false;
        },
    },
    2422: {
        atk: function(p) { return (p.delayed > 0 && window.specials[2422].multiplier) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2422].multiplier = false;
            if (p.captain) if (p.captain.class.has("Driven") || p.captain.class.has("Powerhouse")) window.specials[2422].multiplier = true;
            else window.specials[2422].multiplier = false;
        },
    },
    2423: {
        orb: function(p) { return window.specials[2423].multiplier == 2 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2423].multiplier, [p.friendCaptain, p.captain], p.effectName) : (p.unit.class.has("Driven") || p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2423].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2423].multiplier == 1.75 ? 1 : 0);
            window.specials[2423].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb boost. To switch to the ' + [2, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '2423warning'
            });
        },
    },
    2424: {
        orb: function(p) { return window.specials[2424].multiplier == 2 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2424].multiplier, [p.friendCaptain, p.captain], p.effectName) : (p.unit.class.has("Driven") || p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2424].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2424].multiplier == 1.75 ? 1 : 0);
            window.specials[2424].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb boost. To switch to the ' + [2, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '2424warning'
            });
        },
    },
    2425: {
        def: function(p) { return 0.2; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2425].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2425].turnedOn = false;
        }
    },
    2426: {
        def: function(p) { return 0.2; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2426].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2426].turnedOn = false;
        }
    },
    2427: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Slasher") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2428: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Slasher") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2429: {
        def: function(p) { return window.specials[2429].turnedOn ? 0.5 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2429].turnedOn = p.captain.class.has("Slasher") ? true : false;
        },
    },
    2434: {
        delay: function(p) { return 1; },
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? 2 : 1},
    },
    2435: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1},
        type: "class"
    },
    2437: {
        staticMult: function(p) { return 40; },
        def: function(p) { return 0.2; }
    },
    2438:{
        affinity: function(p) { return 1.5; },
        atk: function(p) { return p.defenseDown ? window.specials[2438].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2438].multiplier == 1 ? 1 : window.specials[2438].multiplier == 1.75 ? 2 : window.specials[2438].multiplier == 2 ? 3 : 0);
            window.specials[2438].multiplier = [1, 1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1, 1.75, 2, 2.25][n] + 'x Conditional boost. To switch to the ' + [1.75, 2, 2.25, 1][n] + 'x Conditional boost, disable and re-enable this special',
                name: '2438warning'
            });
        },
    },
    2439: {
        delay: function(p) { return 1; },
    },
    2440: {
        chain: function(p) { return window.specials[2440].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2440].multiplier == 3) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[2440].multiplier == 3 ? 1 : 0);
            window.specials[2440].multiplier = [3, 1][n];
            p.scope.notify({
                text: ['Enabling', 'Disabling'][n] + ' the 3x chain lock. To switch to the buff ' + ['off', 'on'][n] + ', disable and re-enable this special',
                name: '2440warning'
            });
        },
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2441: {
        chain: function(p) { return window.specials[2441].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2441].multiplier == 3) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[2441].multiplier == 3 ? 1 : 0);
            window.specials[2441].multiplier = [3, 1][n];
            p.scope.notify({
                text: ['Enabling', 'Disabling'][n] + ' the 3x chain lock. To switch to the buff ' + ['off', 'on'][n] + ', disable and re-enable this special',
                name: '2441warning'
            });
        },
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2442: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2442].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Doflamingo is your captain',
                name: '2442warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2442].turnedOn[p.slot] = false;
        }
    },
    2443: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2443].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Doflamingo is your captain',
                name: '2443warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2443].turnedOn[p.slot] = false;
        }
    },
    2444: {
        orb: function(p) { return (p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2447: {
        delay: function(p) { return 1; },
        def: function(p) { return 0; },
        warning: "Selected special (%name%) assumes that the Captain or Friend Captain have a TND orb."
    },
    2448: {
        delay: function(p) { return 2; },
        def: function(p) { return 0; },
        warning: "Selected special (%name%) assumes that the Captain or Friend Captain have a TND orb."
    },
    2449: {
        atk: function(p) { return (window.specials[2449].turnedOn && p.defenseDown) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2449].turnedOn = p.classCount.Powerhouse == 6 ? true : false;
        },
        onDeactivation: function(p) {
            window.specials[2449].turnedOn = false;
        }
    },
    2450: {
        atk: function(p) { return (window.specials[2450].turnedOn && p.defenseDown) ? 2 : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2450].turnedOn = p.classCount.Powerhouse == 6 ? true : false;
        },
        onDeactivation: function(p) {
            window.specials[2450].turnedOn = false;
        }
    },
    2451: {
        affinity: function(p) { return 1.75; },
        warning: "Selected special (%name%) assumes that the Captain or Friend Captain have a TND orb."
    },
    2452: {
        affinity: function(p) { return 2; },
        warning: "Selected special (%name%) assumes that the Captain or Friend Captain have a TND orb."
    },
    2456: {
        chainAddition: function(p) { return 0.3; }
    },
    2457: {
        chainAddition: function(p) { return 0.3; }
    },
    2459: {
        delay: function(p) { return window.specials[2459].turnedOn ? 1 : 0; },
        onActivation: function(p) {
            window.specials[2459].turnedOn = p.classCount.Fighter == 6 ? true : false;
        },
        onDeactivation: function(p) {
            window.specials[2459].turnedOn = false;
        },
    },
    2460: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        type: "type",
    },
    2461: {
        chainAddition: function(p) { return 0.5; }
    },
    2462:{
        atk: function(p) { return (p.unit.class.has("Powerhouse")) ? window.specials[2462].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2462].multiplier == 1.75 ? 1 : 0);
            window.specials[2462].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x ATK boost. To switch to the ' + [2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2462warning'
            });
        },
    },
    2463:{
        atk: function(p) { return (p.unit.class.has("Powerhouse")) ? window.specials[2463].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2463].multiplier == 1.75 ? 1 : 0);
            window.specials[2463].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x ATK boost. To switch to the ' + [2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2463warning'
            });
        },
    },
    2464: {
        affinity: function(p) { return (window.specials[2464].affmultiplier && (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven"))) ? 1.75 : 1; },
        chainAddition: function(p) { return window.specials[2464].chainmultiplier ? 1.1 : 0; },
        onActivation: function(p) {
            if (p.captain) if (p.captain.class.has("Free Spirit") || p.captain.class.has("Cerebral") || p.captain.class.has("Powerhouse") || p.captain.class.has("Driven")) window.specials[2464].affmultiplier = true;
            if (p.captain) if (p.captain.class.has("Fighter") || p.captain.class.has("Striker") || p.captain.class.has("Slasher") || p.captain.class.has("Shooter")) window.specials[2464].chainmultiplier = true;
        },
        onDeactivation: function(p) {
            window.specials[2464].affmultiplier = false;
            window.specials[2464].chainmultiplier = false;
        },
    },
    2465: {
        affinity: function(p) { return (window.specials[2465].affmultiplier && (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven"))) ? 1.75 : 1; },
        chainAddition: function(p) { return window.specials[2465].chainmultiplier ? 1.1 : 0; },
        onActivation: function(p) {
            if (p.captain) if (p.captain.class.has("Free Spirit") || p.captain.class.has("Cerebral") || p.captain.class.has("Powerhouse") || p.captain.class.has("Driven")) window.specials[2465].affmultiplier = true;
            if (p.captain) if (p.captain.class.has("Fighter") || p.captain.class.has("Striker") || p.captain.class.has("Slasher") || p.captain.class.has("Shooter")) window.specials[2465].chainmultiplier = true;
        },
        onDeactivation: function(p) {
            window.specials[2465].affmultiplier = false;
            window.specials[2465].chainmultiplier = false;
        },
    },
    2466:{
        orb: function(p) { return (p.unit.class.has("Powerhouse")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2466].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2466].multiplier == 1.75 ? 1 : window.specials[2466].multiplier == 2 ? 2 : 0);
            window.specials[2466].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Orb boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '2466warning'
            });
        },
    },
    2470: {
        delay: function(p) { return 2; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2470].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2470].turnedOn = false;
        }
    },
    2471: {
        delay: function(p) { return 2; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2471].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2471].turnedOn = false;
        }
    },
    2474: {
        orb: function(p) { return p.unit.class.has("Slasher") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2474].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2474].multiplier == 2 ? 1 : 0);
            window.specials[2474].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x Orb boost. To switch to the ' + [2.25, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '2474warning'
            });
        }
    },
    2475: {
        orb: function(p) { return p.unit.class.has("Slasher") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2475].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2475].multiplier == 2 ? 1 : 0);
            window.specials[2475].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x Orb boost. To switch to the ' + [2.25, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '2475warning'
            });
        }
    },
    2476: {
        atk: function(p) { return p.unit.class.has("Slasher") ? window.specials[2476].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2476].multiplier == 2 ? 1 : 0);
            window.specials[2476].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '2476warning'
            });
        }
    },
    2477: {
        atk: function(p) { return p.unit.class.has("Slasher") ? window.specials[2477].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2477].multiplier == 2 ? 1 : 0);
            window.specials[2477].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '2477warning'
            });
        }
    },
    2478: {
        onActivation: function(p) {
            window.specials[2478].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2478].turnedOn = false;
        }
    },
    2479: {
        onActivation: function(p) {
            window.specials[2479].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2479].turnedOn = false;
        }
    },
    2484: {
        atk: function(p) { return p.unit.class.has("Slasher") ? window.specials[2484].multiplier : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Slasher") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2484].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2484].multiplier = 1;
            if (p.captain.class.has("Slasher")) {
                window.specials[2484].multiplier = 1.75;
            }
        },
    },
    2485: {
        atk: function(p) { return p.unit.class.has("Slasher") ? window.specials[2485].multiplier : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Slasher") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2485].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2485].multiplier = p.captain.class.has("Slasher") ? 1.75 : 1;
        },
    },
    2486: {
        affinity: function(p) { return p.unit.class.has("Slasher") ? window.specials[2486].multiplier : 1; },
        onActivation: function(p) {
            window.specials[2486].multiplier = 1;
            if (p.captain.class.has("Slasher")) {
                window.specials[2486].multiplier = 2;
            }
        },
    },
    2487: {
        affinity: function(p) { return p.unit.class.has("Slasher") ? window.specials[2487].multiplier : 1; },
        onActivation: function(p) {
            window.specials[2487].multiplier = 1;
            if (p.captain.class.has("Slasher")) {
                window.specials[2487].multiplier = 2;
            }
        },
    },
    2488: {
        affinity: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven")) ? 1.75 : 1; },
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2492: {
        chainAddition: function(p) { return 0.3; }
    },
    2494: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); }
    },
    2497: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    2498: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    2500: {
        atk: function(p) { return window.specials[2500].multiplier ? p.slot < 2 ? 2 : 1 : p.slot == p.sourceSlot ? 2 : 1; },
        type: "class",
        orb: function(p) { return window.specials[2500].multiplier ? (p.slot < 2) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName) : p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2500].multiplier = (p.slot < 2 ? true : false);
        }
    },
    2503: {
        atk: function(p) { return (p.unit.class.has("Shooter") && window.specials[2503].turnedOn) ? 2 : 1; },
        type: "class",
        onActivation: function(p) {
            window.specials[2503].turnedOn = p.classCount.Shooter == 6 ? true : false;
        },
    },
    2504: {
        atk: function(p) { return (p.unit.class.has("Shooter") && window.specials[2504].turnedOn) ? 2 : 1; },
        type: "class",
        onActivation: function(p) {
            window.specials[2504].turnedOn = p.classCount.Shooter == 6 ? true : false;
        },
    },
    2505: {
        delay: function(p) { return 1; },
        chain: function(p) { return window.specials[2505].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2505].multiplier == 2.75) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2505].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[2505].multiplier = (p.slot < 2) ? 2.75 : 1;
        },
    },
    2506: {
        chainAddition: function(p) { return 0.5; }
    },
    2507:{
        orb: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2507].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2507].multiplier == 1.5 ? 1 : window.specials[2507].multiplier == 1.75 ? 2 : 0);
            window.specials[2507].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x Orb boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x Orb boost, disable and re-enable this special',
                name: '2507warning'
            });
        },
    },
    2508:{
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? window.specials[2508].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2508].multiplier == 1.75 ? 1 : window.specials[2508].multiplier == 2 ? 2 : 0);
            window.specials[2508].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2508warning'
            });
        },
    },
    2509:{
        atk: function(p) { return window.specials[2509].turnedOn ? 2 : 1; },
        type: "class",
        staticMult: function(p) { return p.slot == p.sourceSlot ? 300 : 0; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2509].turnedOn = !window.specials[2509].turnedOn;
            if (window.specials[2509].turnedOn){
                p.scope.notify({
                    text: 'Using the 2x ATK boost. To switch to the ATK boost off, disable and re-enable this special',
                    name: '2509warning'
                });
            }
        },
    },
    2510:{
        atk: function(p) { return window.specials[2510].turnedOn ? 2 : 1; },
        type: "class",
        staticMult: function(p) { return p.slot == p.sourceSlot ? 300 : 0; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2510].turnedOn = !window.specials[2510].turnedOn;
            if (window.specials[2510].turnedOn){
                p.scope.notify({
                    text: 'Using the 2x ATK boost. To switch to the ATK boost off, disable and re-enable this special',
                    name: '2510warning'
                });
            }
        },
    },
    2514: {
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }
    },
    2515: {
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }
    },
    2519: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.5 : 1; },
        type: "class"
    },
    2520: {
        atk: function(p) { return (p.delayed > 0) ? 1.5 : 1; },
        type: "condition",
    },
    2521:{
        affinity: function(p) { return window.specials[2521].turnedOn ? 1.5 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2521].turnedOn = p.captain != null && p.captain.type == "DEX";
        },
    },
    2522: {
        delay: function(p) { return 1; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    2525: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? 1.5 : 1; },
        type: "class",
        chainAddition: function(p) { return 0.3; }
    },
    2526: {
        def: function(p) { return 0.5; },
        rcv: function(p) { return 1.5; },
    },
    2527: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2527].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2527].turnedOn = false;
        }
    },
    2528: {
        def: function(p) { return 0.2; },
        orb: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }
    },
    2529: {
        def: function(p) { return 0.2; },
        orb: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }
    },
    2545: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    2546: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    2553: {
        delay: function(p) { return 1; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2553].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2553].turnedOn = false;
        }
    },
    2554:{
        atk: function(p) { return p.delayed > 0 ? window.specials[2554].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2554].multiplier == 1.5 ? 1 : window.specials[2554].multiplier == 1.75 ? 2 : 0);
            window.specials[2554].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x Conditional boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x Conditional boost, disable and re-enable this special',
                name: '2554warning'
            });
        },
    },
    2555:{
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Shooter") || p.unit.class.has("Slasher")) ? window.specials[2555].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2555].multiplier == 1.75 ? 1 : window.specials[2555].multiplier == 2 ? 2 : 0);
            window.specials[2555].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2555warning'
            });
        },
    },
    2562: {
        orb: function(p) { return (p.unit.class.has("Free Spirit")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2563: {
        orb: function(p) { return (p.unit.class.has("Free Spirit")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2564:{
        chainAddition: function(p) { return window.specials[2564].multiplier ? 0.3 : 0.7; },
        rcv: function(p) { return !window.specials[2564].multiplier ? 1.5 : 1; },
        onActivation: function(p) {
            var n = (window.specials[2564].multiplier == true ? 1 : 0);
            window.specials[2564].multiplier = [true, false][n];
            p.scope.notify({
                text: 'Using the ' + ['0.3x Chain Boost', '0.7x Chain Boost and 1.5x RCV boost'][n] + '. To switch to the ' + ['0.7x Chain Boost and 1.5x RCV boost', '0.3x Chain Boost'][n] + ', disable and re-enable this special',
                name: '2564warning'
            });
        },
    },
    2565:{
        chainAddition: function(p) { return window.specials[2565].multiplier ? 0.3 : 0.7; },
        rcv: function(p) { return !window.specials[2565].multiplier ? 1.5 : 1; },
        onActivation: function(p) {
            var n = (window.specials[2565].multiplier == true ? 1 : 0);
            window.specials[2565].multiplier = [true, false][n];
            p.scope.notify({
                text: 'Using the ' + ['0.3x Chain Boost', '0.7x Chain Boost and 1.5x RCV boost'][n] + '. To switch to the ' + ['0.7x Chain Boost and 1.5x RCV boost', '0.3x Chain Boost'][n] + ', disable and re-enable this special',
                name: '2565warning'
            });
        },
    },
    2568: {
        atk: function(p) { return (p.defenseDown && window.specials[2568].turnedOn) ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return window.specials[2568].turnedOn ? window.specials[2568].multiplier : 1 },
        turnedOn: false,
        onActivation: function(p) {
            if (p.captain.class.has("Free Spirit")) {
                window.specials[2568].turnedOn = true;
                var n = (window.specials[2568].multiplier == 0.5 ? 1 : 0);
                window.specials[2568].multiplier = [0.5, 0][n];
                p.scope.notify({
                    text: 'Using the ' + ['50%', '100%'][n] + ' Defense down. To switch to the ' + ['100%', '50%'][n] + ' Defense down, disable and re-enable this special',
                    name: '2568warning'
                });
            }
        },
        onDeactivation: function(p) {
            window.specials[2568].turnedOn = false;
        },
    },
    2569: {
        atk: function(p) { return (p.defenseDown && window.specials[2569].turnedOn) ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return window.specials[2569].turnedOn ? window.specials[2569].multiplier : 1 },
        turnedOn: false,
        onActivation: function(p) {
            if (p.captain.class.has("Free Spirit")) {
                window.specials[2569].turnedOn = true;
                var n = (window.specials[2569].multiplier == 0.5 ? 1 : 0);
                window.specials[2569].multiplier = [0.5, 0][n];
                p.scope.notify({
                    text: 'Using the ' + ['50%', '100%'][n] + ' Defense down. To switch to the ' + ['100%', '50%'][n] + ' Defense down, disable and re-enable this special',
                    name: '2569warning'
                });
            }
        },
        onDeactivation: function(p) {
            window.specials[2569].turnedOn = false;
        },
    },
    2570: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)}
    },
    2571: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)}
    },
    2574: {
        atk: function(p) { return p.delayed > 0 ? window.specials[2574].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2574].multiplier = p.captain.class.has("Free Spirit") ? 2 : 1;
        }
    },
    2575: {
        atk: function(p) { return p.delayed > 0 ? window.specials[2574].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2574].multiplier = p.captain.class.has("Free Spirit") ? 2 : 1;
        }
    },
    2578: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "class"
    },
    2579:{
        atk: function(p) { return p.unit.class.has("Cerebral") ? window.specials[2579].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2579].multiplier == 1.75 ? 1 : window.specials[2579].multiplier == 2 ? 2 : 0);
            window.specials[2579].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2579warning'
            });
        },
    },
    2580: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        }
    },
    2582: {
        orb: function(p) { return p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2582].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2 : 1);
            window.specials[2582].multiplier = n;
            if (n == 2) p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '2582warning'
            });
        }
    },
    2583: {
        orb: function(p) { return p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2583].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2 : 1);
            window.specials[2583].multiplier = n;
            if (n == 2) p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '2583warning'
            });
        }
    },
    2584: {
        orb: function(p) { return ((p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) && window.specials[2584].multiplier == 1.75) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2584].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2584].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2 : 1.75);
            window.specials[2584].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
                name: '2584warning'
            });
        }
    },
    2585: {
        orb: function(p) { return ((p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) && window.specials[2585].multiplier == 1.75) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2585].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2585].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2 : 1.75);
            window.specials[2585].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'below' : 'above') + ' 30%, using the ' + n + 'x multiplier.',
                name: '2585warning'
            });
        }
    },
    2586: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") && window.specials[2586].multiplier == 1.75) ? window.specials[2586].multiplier : window.specials[2586].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2586].multiplier == 1.75 ? 1 : 0);
            window.specials[2586].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2586warning'
            });
        }
    },
    2587: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") && window.specials[2587].multiplier == 1.75) ? window.specials[2587].multiplier : window.specials[2587].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2587].multiplier == 1.75 ? 1 : 0);
            window.specials[2587].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2587warning'
            });
        }
    },
    2588: {
        affinity: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven")) ? 1.75 : 1; },
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse") || p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2589: {
        def: function(p) { return 0.5; }
    },
    2590: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    2591: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    2593: {
        chainAddition: function(p) { return 0.3; }
    },
    2594: {
        affinity: function(p) { return 1.3; },
    },
    2597: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition",
        affinity: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
    },
    2599: {
        def: function(p) { return 0.2; },
        delay: function(p) { return 1; }
    },
    2606: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? window.specials[2606].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2 : 1.75);
            window.specials[2606].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '2606warning'
            });
        }
    },
    2607: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? window.specials[2607].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2 : 1.75);
            window.specials[2607].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '2607warning'
            });
        }
    },
    2608: {
        orb: function(p) { return p.slot > 3 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2609: {
        orb: function(p) { return p.slot > 3 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2610: {
        chainAddition: function(p) { return 0.5; }
    },
    2611: {
        chainAddition: function(p) { return 0.5; }
    },
    2612:{
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Cerebral")) ? window.specials[2612].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2612].multiplier == 1.5 ? 1 : window.specials[2612].multiplier == 1.75 ? 2 : 0);
            window.specials[2612].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x ATK boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x ATK boost, disable and re-enable this special',
                name: '2612warning'
            });
        },
    },
    2613:{
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2613].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2613].multiplier == 1.75 ? 1 : window.specials[2613].multiplier == 2 ? 2 : 0);
            window.specials[2613].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2613warning'
            });
        },
    },
    2614: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "INT") ? 1.75 : 1; },
        type: "type"
    },
    2619: {
        atk: function(p) { return (p.unit.type == "INT" && window.specials[2619].turnedOn) ? 2.25 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            if (p.slot < 2) window.specials[2619].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2619].turnedOn = false;
        }
    },
    2620: {
        atk: function(p) { return (p.unit.type == "INT" && window.specials[2620].turnedOn) ? 2.25 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            if (p.slot < 2) window.specials[2620].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2620].turnedOn = false;
        }
    },
    2621: {
        atk: function(p) { return (p.unit.type == "PSY" && window.specials[2621].turnedOn) ? 2.25 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            if (p.slot < 2) window.specials[2621].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2621].turnedOn = false;
        }
    },
    2622: {
        atk: function(p) { return (p.unit.type == "PSY" && window.specials[2622].turnedOn) ? 2.25 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            if (p.slot < 2) window.specials[2622].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2622].turnedOn = false;
        }
    },
    2623: {
        atk: function(p) { return (p.unit.type == "DEX" && window.specials[2623].turnedOn) ? 2.25 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            if (p.slot < 2) window.specials[2623].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2623].turnedOn = false;
        }
    },
    2624: {
        atk: function(p) { return (p.unit.type == "DEX" && window.specials[2624].turnedOn) ? 2.25 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            if (p.slot < 2) window.specials[2624].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2624].turnedOn = false;
        }
    },
    2625: {
        orb: function(p) { return window.specials[2625].turnedOn ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2625].turnedOn = (p.colorCount.STR>=3 || p.colorCount.DEX>=3 || p.colorCount.QCK>=3 || p.colorCount.PSY>=3 || p.colorCount.INT>=3) ? true : false;
        },
        onDeactivation: function(p) {
            window.specials[2625].turnedOn = false;
        }
    },
    2626: {
        orb: function(p) { return window.specials[2626].turnedOn ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2626].turnedOn = (p.colorCount.STR>=3 || p.colorCount.DEX>=3 || p.colorCount.QCK>=3 || p.colorCount.PSY>=3 || p.colorCount.INT>=3) ? true : false;
        },
        onDeactivation: function(p) {
            window.specials[2626].turnedOn = false;
        }
    },
    2627: {
        chainAddition: function(p) { return 0.4; }
    },
    2628: {
        chainAddition: function(p) { return 0.4; }
    },
    2629: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
        type: "type"
    },
    2630: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
        type: "type"
    },
    2632: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2632].turnedOn = true;
            p.scope.notify({
                text: 'Only affects captain damage if Garp is your captain, use Friend Captain if you don\'t want the additional ATK boost due to Captain Swap',
                name: '2632warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2632].turnedOn = false;
        }
    },
    2633: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
        type: "class",
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2633].turnedOn[p.slot] = true;
            /*p.scope.notify({
                text: 'Only affects damage if Luffy is your captain',
                name: '2633warning'
            });*/
        },
        onDeactivation: function(p) {
            window.specials[2633].turnedOn[p.slot] = false;
        }
    },
    2634: {
        affinity: function(p) { return (p.unit.class.has("Free Spirit")) ? 1.75 : 1; },
    },
    2637: {
        orb: function(p) { return p.unit.class.has("Free Spirit") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2640: {
        delay: function(p) { return 2; },
    },
    2641: {
        def: function(p) { return .05; },
        chainAddition: function(p) { return 0.4; }
    },
    2642: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Striker")) ? 1.75 : 1; },
        type: "class"
    },
    2643: {
        orb: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2644: {
        affinity: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Powerhouse")) ? 1.75 : 1; },
    },
    2646: {
        delay: function(p) { return 1; },
        def: function(p) { return .2; },
    },
    2647: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    2648: {
        atk: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Slasher")) ? window.specials[2648].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2 : 1);
            window.specials[2648].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '2648warning'
            });
        }
    },
    2649: {
        atk: function(p) { return (p.unit.class.has("Cerebral") || p.unit.class.has("Slasher")) ? window.specials[2649].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 50 ? 2 : 1);
            window.specials[2649].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 50%, using the ' + n + 'x multiplier.',
                name: '2649warning'
            });
        }
    },
    2654: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
    },
    2655: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
    },
    2656: {
        atk: function(p) { return !(p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1 : window.specials[2656].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2656].multiplier == 1.5 ? 1 : 0);
            window.specials[2656].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '2656warning'
            });
        }
    },
    2657: {
        atk: function(p) { return !(p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1 : window.specials[2657].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2657].multiplier == 1.5 ? 1 : 0);
            window.specials[2657].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '2657warning'
            });
        }
    },
    2658: {
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        chainAddition: function(p) { return window.specials[2658].multiplier; },
        onActivation: function(p) {
            window.specials[2658].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Driven")) ? 0.7 : 0;
        }
    },
    2659: {
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        chainAddition: function(p) { return window.specials[2659].multiplier; },
        onActivation: function(p) {
            window.specials[2659].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Driven")) ? 0.7 : 0;
        }
    },
    2660: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? window.specials[2660].multiplier : 1; },
        type: "class",
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2660].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2660].multiplier = (p.captain.type == "STR" || p.captain.type == "QCK" || p.captain.type == "INT") ? 1.75 : 1;
        },
    },
    2661: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? window.specials[2661].multiplier : 1; },
        type: "class",
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2661].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2661].multiplier = (p.captain.type == "STR" || p.captain.type == "QCK" || p.captain.type == "INT") ? 1.75 : 1;
        },
    },
    2663: {
        atk: function(p) { return !(p.unit.type == "STR" || p.unit.type == "QCK") ? 1 : window.specials[2663].multiplier; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2663].multiplier == 1.75 ? 1 : 0);
            window.specials[2663].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2663warning'
            });
        }
    },
    2664: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2664].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2664].multiplier == 1.75 ? 1 : 0);
            window.specials[2664].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x orb boost. To switch to the ' + [2, 1.75][n] + 'x boost, disable and re-enable this special',
                name: '2664warning'
            });
        }
    },
    2666: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    2667: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        }
    },
    2668: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        }
    },
    2669: {
        affinity: function(p) { return window.specials[2669].multiplier; },
        onActivation: function(p) {
            window.specials[2669].multiplier = p.colorCount.STR >= 4 ? 2 : 1;
        },
    },
    2670: {
        affinity: function(p) { return window.specials[2669].multiplier; },
        onActivation: function(p) {
            window.specials[2669].multiplier = p.colorCount.STR >= 4 ? 2 : 1;
        },
    },
    2671: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)},
        atkbase: function(p) { return p.slot == p.sourceSlot ? Math.min(1000,window.specials[2671].momBoost) : 0; },
        onActivation: function(p) {
            window.specials[2671].momBoost = Math.floor(p.percHP*p.maxHP/2000);
        },
    },
    2672: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)},
        atkbase: function(p) { console.log(p); return p.slot == p.sourceSlot ? Math.min(1000,window.specials[2672].momBoost) : 0; },
        onActivation: function(p) {
            window.specials[2672].momBoost = Math.floor(p.percHP*p.maxHP/2000);
        },
    },
    2673: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2673].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2673].multiplier = (p.colorCount.DEX + p.colorCount.PSY >= 5) ? 2 : 1;
        },
    },
    2674: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2674].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2674].multiplier = (p.colorCount.DEX + p.colorCount.PSY >= 5) ? 2 : 1;
        },
    },
    2677: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? 2 : 1; },
        type: "class",
    },
    2678: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? 2 : 1; },
        type: "class",
    },
    2679: {
        delay: function(p) { return 1; },
    },
    2680: {
        delay: function(p) { return 1; },
    },
    2682: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    2683: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? 1.75 : 1; },
    },
    2684: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? 1.75 : 1; },
    },
    2685: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
        chainAddition: function(p) { return 0.7; }
    },
    2686: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
        chainAddition: function(p) { return 0.7; }
    },
    2687: {
        affinity: function(p) { return !(p.unit.type == "DEX" || p.unit.type == "QCK" || p.unit.type == "PSY") ? 1 : window.specials[2687].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[2687].multiplier == 1.5 ? 1 : window.specials[2687].multiplier == 1.75 ? 2 : 0);
            window.specials[2687].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x Affinity multiplier. To switch to the ' + [1.75, 2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '2687warning'
            });
        }
    },
    2689: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        orb: function(p) { return p.unit.type == "INT" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        type: "type",
    },
    2690: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        orb: function(p) { return p.unit.type == "INT" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        type: "type",
    },
    2691: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "type"
    },
    2692: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "type"
    },
    2695: {
        affinity: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    2696: {
        affinity: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
    },
    2697: {
        chain: function(p) { return 2; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
        }
    },
    2698: {
        chain: function(p) { return window.specials[2698].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2698].multiplier == 2) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[2698].multiplier = 1;
            if (p.captain.class.has("Striker") || p.captain.class.has("Cerebral")) {
                window.specials[2698].multiplier = 2;
            }
        },
    },
    2701:{
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2701].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2701].multiplier == 1.75 ? 1 : 0);
            window.specials[2701].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb boost. To switch to the ' + [2, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '2701warning'
            });
        },
    },
    2702:{
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Powerhouse")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2702].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2702].multiplier == 1.75 ? 1 : 0);
            window.specials[2702].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb boost. To switch to the ' + [2, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '2702warning'
            });
        },
    },
    2703: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    2704: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    2705:{
        def: function(p) { return window.specials[2705].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[2705].multiplier == .5 ? 1 : 0);
            window.specials[2705].multiplier = [.5, 0][n];
            p.scope.notify({
                text: 'Using the ' + [50, 100][n] + '% Defense Reduction. To switch to the ' + [100, 50][n] + '% Defense Reduction, disable and re-enable this special',
                name: '2705warning'
            });
        },
    },
    2706:{
        def: function(p) { return window.specials[2706].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[2706].multiplier == .5 ? 1 : 0);
            window.specials[2706].multiplier = [.5, 0][n];
            p.scope.notify({
                text: 'Using the ' + [50, 100][n] + '% Defense Reduction. To switch to the ' + [100, 50][n] + '% Defense Reduction, disable and re-enable this special',
                name: '2706warning'
            });
        },
    },
    2707:{
        def: function(p) { return 0; },
    },
    2708: {
        chainAddition: function(p) { return window.specials[2708].multiplier; },
        onActivation: function(p) {
            window.specials[2708].multiplier = (p.captain.type == "DEX" || p.captain.type == "PSY") ? 0.8 : 0;
        },
    },
    2709: {
        chainAddition: function(p) { return window.specials[2709].multiplier; },
        onActivation: function(p) {
            window.specials[2709].multiplier = (p.captain.type == "DEX" || p.captain.type == "PSY") ? 0.8 : 0;
        },
    },
    2710: {
        chainAddition: function(p) { return 0.3; },
    },
    2711: {
        chainAddition: function(p) { return 0.3; },
    },
    2713:{
        def: function(p) { return 0; },
    },
    2714:{
        def: function(p) { return 0; },
    },
    2715: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: "type"
    },
    2716: {
        chainAddition: function(p) { return 0.25; },
    },
    2717: {
        orb: function(p) { return (p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2718: {
        staticMult: function(p) { return 2.5; },
    },
    2719: {
        affinity: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
    },
    2724: {
        chainAddition: function(p) { return 0.5; },
    },
    2725:{
        affinity: function(p) { return (p.unit.class.has("Powerhouse")) ? window.specials[2725].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2725].multiplier == 1.75 ? 1 : window.specials[2725].multiplier == 2 ? 2 : 0);
            window.specials[2725].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Affinity boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Affinity boost, disable and re-enable this special',
                name: '2725warning'
            });
        },
    },
    2727:{
        atk: function(p) { return (p.unit.class.has("Powerhouse")) ? window.specials[2727].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2727].multiplier == 1.75 ? 1 : window.specials[2727].multiplier == 2 ? 2 : 0);
            window.specials[2727].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2727warning'
            });
        },
    },
    2728:{
        delay: function(p) { return 1; },
    },
    2729:{
        delay: function(p) { return 1; },
    },
    2730: {
        chainAddition: function(p) {return window.specials[2730].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[2730].multiplier == 0.5 ? 1 : 0);
            window.specials[2730].multiplier = [0.5, 1.1][n];
            p.scope.notify({
                text: 'Using the ' + [0.5, 1.1][n] + 'x chain addition. To switch to the ' + [1.1, 0.5][n] + 'x chain addition, disable and re-enable this special',
                name: '2730warning'
            });
        }
    },
    2731: {
        chainAddition: function(p) {return window.specials[2731].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[2731].multiplier == 0.5 ? 1 : 0);
            window.specials[2731].multiplier = [0.5, 1.1][n];
            p.scope.notify({
                text: 'Using the ' + [0.5, 1.1][n] + 'x chain addition. To switch to the ' + [1.1, 0.5][n] + 'x chain addition, disable and re-enable this special',
                name: '2731warning'
            });
        }
    },
    2732: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been poisoned."
    },
    2733: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been poisoned."
    },
    2734: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2734].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            if (p.colorCount.STR >= 3 || p.colorCount.DEX >= 3 || p.colorCount.QCK >= 3 || p.colorCount.PSY >= 3 || p.colorCount.INT >= 3) window.specials[2734].multiplier = 2;
            else window.specials[2734].multiplier = 1;
        },
    },
    2735: {
        atk: function(p) { return window.specials[2735].turnedOn ? 2.25 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            if (p.slot < 2) window.specials[2735].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2735].turnedOn = false;
        }
    },
    2736: {
        atk: function(p) { return window.specials[2736].turnedOn ? 2.25 : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            if (p.slot < 2) window.specials[2736].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2736].turnedOn = false;
        }
    },
    2739: {
        staticMult: function(p) { return [ 100, 0 ][window.specials[2739].multiplier]; },
        atk: function(p) { return p.delayed > 0 ? [ 1, 2 ][window.specials[2739].multiplier] : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2739].multiplier == 0 ? 1 : 0);
            window.specials[2739].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Tap Timing Bonus', 'Conditional Boost'][n] + ' boost. To switch to the ' + ['Conditional Boost', 'Tap Timing Bonus'][n] + ', disable and re-enable this special',
                name: '2739warning'
            });
        },
    },
    2740: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter")) ? 2.5 : 1; },
        type: "class"
    },
    2741: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Shooter")) ? 2.5 : 1; },
        type: "class"
    },
    2746: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    2747: {
        atk: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    2748: {
        chain: function(p) { return window.specials[2748].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2748].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[2748].multiplier == 2.75 ? 1 : 0);
            window.specials[2748].multiplier = [2.75, 3][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3][n] + 'x chain lock. To switch to the ' + [3, 2.75][n] + 'x chain lock, disable and re-enable this special',
                name: '2748warning'
            });
        },
    },
    2749: {
        chain: function(p) { return window.specials[2749].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2749].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[2749].multiplier == 2.75 ? 1 : 0);
            window.specials[2749].multiplier = [2.75, 3][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3][n] + 'x chain lock. To switch to the ' + [3, 2.75][n] + 'x chain lock, disable and re-enable this special',
                name: '2749warning'
            });
        },
    },
    2750: {
        affinity: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    2751: {
        affinity: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 1.5 : 1; }
    },
    2752: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Shooter")) ? 1.3 : 1; },
        type: "class",
        chainAddition: function(p) { return 0.3; },
    },
    2757: {
        orb: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Striker") || p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2757].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2757].multiplier == 1.75 ? 1 : 0);
            window.specials[2757].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x orb boost. To switch to the ' + [2.25, 1.75][n] + 'x orb boost, disable and re-enable this special',
                name: '2757warning'
            });
        },
    },
    2758: {
        orb: function(p) { return (p.unit.class.has("Shooter") || p.unit.class.has("Striker") || p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2758].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2758].multiplier == 1.75 ? 1 : 0);
            window.specials[2758].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x orb boost. To switch to the ' + [2.25, 1.75][n] + 'x orb boost, disable and re-enable this special',
                name: '2758warning'
            });
        },
    },
    2759:{
        affinity: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? window.specials[2759].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2759].multiplier == 1.75 ? 1 : window.specials[2759].multiplier == 2 ? 2 : 0);
            window.specials[2759].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Affinity boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Affinity boost, disable and re-enable this special',
                name: '2759warning'
            });
        },
    },
    2760: {
        chain: function(p) { return window.specials[2760].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2760].multiplier == 2.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2760].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[2760].multiplier = 1;
            if (p.captain.class.has("Fighter") || p.captain.class.has("Cerebral")) {
                window.specials[2760].multiplier = 2.5;
            }
        },
    },
    2761: {
        orb: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2761].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2761].multiplier == 1.5 ? 1 : window.specials[2761].multiplier == 1.75 ? 2 : 0);
            window.specials[2761].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x orb boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x orb boost, disable and re-enable this special',
                name: '2761warning'
            });
        }
    },
    2762:{
        affinity: function(p) { return window.specials[2762].multiplier; },
        onActivation: function(p) {
            if (p.captain.class.has("Shooter")) {
                var n = (window.specials[2762].multiplier == 1.75 ? 1 : 0);
                window.specials[2762].multiplier = [1.75, 2][n];
                p.scope.notify({
                    text: 'Using the ' + [1.75, 2][n] + 'x Affinity boost. To switch to the ' + [2, 1.75][n] + 'x Affinity boost, disable and re-enable this special',
                    name: '2762warning'
                });
            }
            else window.specials[2762].multiplier = 1;
        },
    },
    2763:{
        affinity: function(p) { return window.specials[2763].multiplier; },
        onActivation: function(p) {
            if (p.captain.class.has("Shooter")) {
                var n = (window.specials[2763].multiplier == 1.75 ? 1 : 0);
                window.specials[2763].multiplier = [1.75, 2][n];
                p.scope.notify({
                    text: 'Using the ' + [1.75, 2][n] + 'x Affinity boost. To switch to the ' + [2, 1.75][n] + 'x Affinity boost, disable and re-enable this special',
                    name: '2763warning'
                });
            }
            else window.specials[2763].multiplier = 1;
        },
    },
    2765: {
        affinity: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; }
    },
    2766: {
        //TODO
        hit: function(n,p) { return n > 12 ? 2 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '2767warning'
            });
        }
    },
    2767: {
        //TODO
        hit: function(n,p) { return n > 12 ? 2 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '2767warning'
            });
        }
    },
    2768: {
        def: function(p) { return 0; },
        atk: function(p) { return p.defenseDown ? window.specials[2768].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2768].multiplier = (p.colorCount.PSY + p.colorCount.QCK) >= 4 ? 1.75 : 1;
        },
    },
    2769: {
        def: function(p) { return 0; },
        atk: function(p) { return p.defenseDown ? window.specials[2769].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2769].multiplier = (p.colorCount.PSY + p.colorCount.QCK) >= 4 ? 1.75 : 1;
        },
    },
    2770: {
        affinity: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? window.specials[2770].multiplier : 1; },
        onActivation: function(p) {
            window.specials[2770].multiplier = (p.colorCount.STR + p.colorCount.INT) >= 4 ? 1.75 : 1;
        },
    },
    2771: {
        affinity: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? window.specials[2771].multiplier : 1; },
        onActivation: function(p) {
            window.specials[2771].multiplier = (p.colorCount.STR + p.colorCount.INT) >= 4 ? 1.75 : 1;
        },
    },
    2773: {
        def: function(p) { return 0; },
        atk: function(p) { return p.defenseDown ? 2 : 1; },
        type: "condition",
    },
    2774: {
        def: function(p) { return 0; },
        atk: function(p) { return p.defenseDown ? 2 : 1; },
        type: "condition",
    },
    2775: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1; },
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        type: "type",
    },
    2776: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1; },
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        type: "type",
    },
    2777:{
        affinity: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
    },
    2778:{
        affinity: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
    },
    2781: {
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? window.specials[2781].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2781].multiplier == 1.75 ? 1 : 0);
            window.specials[2781].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2781warning'
            });
        },
    },
    2784: {
        def: function(p) { return .2; },
        affinity: function(p) { return p.unit.class.has("Shooter") ? 2 : 1; },
    },
    2785: {
        chainAddition: function(p) { return window.specials[2785].multiplier; },
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 0.9 : 0.7);
            window.specials[2785].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 0.9 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '2785warning'
            });
        }
    },
    2786: {
        delay: function(p) { return 2; },
    },
    2787: {
        delay: function(p) { return 2; },
    },
    2788: {
        chainAddition: function(p) { return 0.7; }
    },
    2789: {
        chainAddition: function(p) { return 0.7; }
    },
    2790: {
        affinity: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? window.specials[2790].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2790].multiplier == 1.75 ? 1 : window.specials[2790].multiplier == 2 ? 2 : 0);
            window.specials[2790].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x affinity boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x affinity boost, disable and re-enable this special',
                name: '2790warning'
            });
        }
    },
    2793: {
        delay: function(p) { return 1; },
        chainAddition: function(p) { return 0.7; },
        atk: function(p) { return p.delayed > 0 ? window.specials[2793].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 1.75 : 1);
            window.specials[2793].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '2793warning'
            });
        }
    },
    2794: {
        orb: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2794].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2794].multiplier == 1.75 ? 1 : 0);
            window.specials[2794].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2794warning'
            });
        }
    },
    2798: {
        atk: function(p) { return 1.75; },
        type: "type",
        affinity: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 1.75 : 1; },
    },
    2799: {
        atk: function(p) { return (p.defenseDown && window.specials[2799].multiplier != 0) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2799].multiplier == 1 ? 2 : (window.specials[2799].multiplier == 2 | window.specials[2799].multiplier == undefined) ? 0 : 1);
            window.specials[2799].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Chain Lock', 'Conditional boost', 'Conditional boost and Chain Lock'][n] + '. To switch to the ' + ['Conditional boost', 'Conditional boost and Chain Lock', 'Chain Lock'][n] + ', disable and re-enable this special',
                name: '2799warning'
            });
        },
        chain: function(p) { return window.specials[2799].multiplier != 1 ? 2.75 : 1; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2799].multiplier != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
    },
    2803: {
        atk: function(p) { return window.specials[2803].multiplier; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2803].multiplier == 1.75 ? 1 : 0);
            window.specials[2803].multiplier = [1.75, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.5][n] + 'x ATK multiplier. To switch to the ' + [2.5, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2803warning'
            });
        },
    },
    2804: {
        atk: function(p) { return window.specials[2804].multiplier; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2804].multiplier == 1.75 ? 1 : 0);
            window.specials[2804].multiplier = [1.75, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.5][n] + 'x ATK multiplier. To switch to the ' + [2.5, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2804warning'
            });
        },
    },
    2805: {
        delay: function(p) { return 2; },
    },
    2806: {
        delay: function(p) { return 2; },
    },
    2809: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; }
    },
    2810: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; }
    },
    2813: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    2814: {
        atk: function(p) { return !(p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1 : window.specials[2814].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2814].multiplier == 1.75 ? 1 : 0);
            window.specials[2814].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2814warning'
            });
        }
    },
    2816: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability assumes the enemy has a Barrier or Percent Damage Reduction.',
                name: '2816warning'
            });
        }
    },
    2817: {
        chainAddition: function(p) { return 1.1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability assumes the enemy has a Barrier or Percent Damage Reduction.',
                name: '2817warning'
            });
        }
    },
    2820: {
        affinity: function(p) { return (p.unit.type == "DEX" || p.unit.type == "QCK") ? window.specials[2820].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2820].multiplier == 1.5 ? 1 : window.specials[2820].multiplier == 1.75 ? 2 : 0);
            window.specials[2820].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x affinity boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x affinity boost, disable and re-enable this special',
                name: '2820warning'
            });
        }
    },
    2822: {
        staticMult: function(p) { return 35; }
    },
    2830: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "class"
    },
    2832: {
        atk: function(p) { return 1.75; },
        type: "type",
        chain: function(p) { return window.specials[2832].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2832].multiplier : 1;
        },
        onActivation: function(p) {
            window.specials[2832].multiplier = p.captain != null ? p.captain.type == "DEX" ? 3 : 2.5 : 2.5;
        },
    },
    2838: {
        chainAddition: function(p) { return window.specials[2838].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[2838].multiplier == .5 ? 1 : 0);
            if (p.colorCount.DEX + p.colorCount.INT >= 3) {
                window.specials[2838].multiplier = [.5, .8][n];
            }
            else {
                window.specials[2838].multiplier = 0;
            }
            p.scope.notify({
                text: 'Using the ' + [.5, .8][n] + 'x chain boost multiplier. To switch to the ' + [.8, .5][n] + 'x multiplier, disable and re-enable this special',
                name: '2838warning'
            });
        },
    },
    2839: {
        chainAddition: function(p) { return window.specials[2839].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[2839].multiplier == .5 ? 1 : 0);
            if (p.colorCount.DEX + p.colorCount.INT >= 3) {
                window.specials[2839].multiplier = [.5, .8][n];
            }
            else {
                window.specials[2839].multiplier = 0;
            }
            p.scope.notify({
                text: 'Using the ' + [.5, .8][n] + 'x chain boost multiplier. To switch to the ' + [.8, .5][n] + 'x multiplier, disable and re-enable this special',
                name: '2839warning'
            });
        },
    },
    2840: {
        atk: function(p) { return !(p.unit.type == "DEX" || p.unit.type == "INT") ? 1 : window.specials[2840].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2840].multiplier == 2 ? 1 : 0);
            window.specials[2840].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '2840warning'
            });
        }
    },
    2841: {
        atk: function(p) { return !(p.unit.type == "DEX" || p.unit.type == "INT") ? 1 : window.specials[2841].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2841].multiplier == 2 ? 1 : 0);
            window.specials[2841].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '2841warning'
            });
        }
    },
    2844: {
        affinity: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? window.specials[2844].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2844].multiplier == 1.75 ? 1 : 0);
            window.specials[2844].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2844warning'
            });
        }
    },
    2845: {
        affinity: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? window.specials[2845].multiplier : 1; },
        onActivation: function(p) {
            window.specials[2845].multiplier = 1.75;
            if (p.captain.class.has("Free Spirit") || p.captain.class.has("Cerebral") || p.captain.class.has("Powerhouse")) {
                window.specials[2845].multiplier = 2;
            }
        },
    },
    2846: {
        rcv: function(p) { return 1.5; },
    },
    2848: {
        atk: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? window.specials[2848].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2848].multiplier == 1.75 ? 1 : window.specials[2848].multiplier == 2 ? 2 : 0);
            window.specials[2848].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x attack boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x attack boost, disable and re-enable this special',
                name: '2848warning'
            });
        }
    },
    2849: {
        affinity: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? window.specials[2849].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2849].multiplier == 1.5 ? 1 : window.specials[2849].multiplier == 1.75 ? 2 : 0);
            window.specials[2849].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x affinity boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x affinity boost, disable and re-enable this special',
                name: '2849warning'
            });
        }
    },
    2853: {
        def: function(p) { return 0; },
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2854: {
        atk: function(p) { return p.defenseDown ? window.specials[2854].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[2854].multiplier = 1;
            if (p.captain.class.has("Fighter") || p.captain.class.has("Free Spirit")) {
                window.specials[2854].multiplier = 2;
            }
        },
    },
    2856: {
        atk: function(p) { return window.specials[2856].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2856].multiplier == 1.75 ? 1 : 0);
            window.specials[2856].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2856warning'
            });
        }
    },
    2857: {
        affinity: function(p) { return window.specials[2857].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[2857].multiplier == 1.75 ? 1 : 0);
            window.specials[2857].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2857warning'
            });
        }
    },
    2858: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2858].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2858].multiplier == 1.75 ? 1 : 0);
            window.specials[2858].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2858warning'
            });
        }
    },
    2868: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    2870: {
        atk: function(p) { return 1.75; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
    },
    2871: {
        def: function(p) { return 0.2; },
        chain: function(p) { return window.specials[2871].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2871].multiplier == 2.75) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2871].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2871].multiplier = p.captain != null && (p.captain.type == "DEX" || p.captain.type == "STR") ? 2.75 : 1;
        },
    },
    2872: {
        delay: function(p) { return 1; },
        chainAddition: function(p) { return window.specials[2872].multiplier; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2872].multiplier = p.captain != null && (p.captain.type == "INT" || p.captain.type == "STR") ? 0.5 : 0;
        },
    },
    2873: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    2874: {
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition"
    },
    2876:{
        def: function(p) { return 0.2; },
        atk: function(p) { return p.defenseDown ? window.specials[2876].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[2876].multiplier == 1.5 ? 1 : window.specials[2876].multiplier == 1.75 ? 2 : 0);
            window.specials[2876].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x Conditional boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x Conditional boost, disable and re-enable this special',
                name: '2876warning'
            });
        },
    },
    2878:{
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2878].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2878].multiplier == 1.75 ? 1 : window.specials[2878].multiplier == 2 ? 2 : 0);
            window.specials[2878].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Orb boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '2878warning'
            });
        },
    },
    2879: {
        turnedOn: false,
        atk: function(p) { return window.specials[2879].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[2879].turnedOn = true;
            var n = (window.specials[2879].multiplier == 1.75 ? 1 : 0);
            window.specials[2879].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '2804warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2879].turnedOn = false;
        }
    },
    2880: {
        atk: function(p) { return 2.25; },
        type: "type",
        warning: "Selected special (%name%) assumes that the enemy has ATK UP."
    },
    2881: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2881].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.QCK + p.colorCount.PSY >= 3) {
                window.specials[2881].multiplier = 2;
            }
            else {
                window.specials[2881].multiplier = 1;
            }
        },
    },
    2883: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "PSY") ? window.specials[2883].multiplier : 1; },
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.QCK + p.colorCount.PSY >= 6) {
                window.specials[2883].multiplier = 2;
            }
            else {
                window.specials[2883].multiplier = 1.75;
            }
        },
    },
    2885: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2885].turnedOn = true;
            p.scope.notify({
                text: 'Only affects captain damage if CP9 is your captain, use Friend Captain if you don\'t want the additional ATK boost due to Captain Swap',
                name: '2885warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2885].turnedOn = false;
        }
    },
    2886: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2886].turnedOn = true;
            p.scope.notify({
                text: 'Only affects captain damage if CP9 is your captain, use Friend Captain if you don\'t want the additional ATK boost due to Captain Swap',
                name: '2886warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2886].turnedOn = false;
        }
    },
    2887:{
        atk: function(p) { return ((p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK")) ? window.specials[2887].boostATK[p.sourceSlot] : 1; },
        type: "type",
        orb: function(p) { return ((p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2887].boostOrb[p.sourceSlot], [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2887].turnedOn = (p.slot < 2) ? true : false;
            window.specials[2887].switch = window.specials[2887].switch ? window.specials[2887].switch : [undefined, undefined, undefined, undefined, undefined, undefined];
            window.specials[2887].switch[p.slot] = window.specials[2887].switch[p.slot] != undefined ? (window.specials[2887].switch[p.slot] + 1) % 4 : 0;
            
            window.specials[2887].boostATK = window.specials[2887].boostATK ? window.specials[2887].boostATK : [undefined, undefined, undefined, undefined, undefined, undefined];
            window.specials[2887].boostOrb = window.specials[2887].boostOrb ? window.specials[2887].boostOrb : [undefined, undefined, undefined, undefined, undefined, undefined];
            window.specials[2887].boostATK[p.slot] = window.specials[2887].turnedOn ? [2, 1, 1, 1][window.specials[2887].switch[p.slot]] : 1;
            window.specials[2887].boostOrb[p.slot] = [1, 1.75, 2, 2.25][window.specials[2887].switch[p.slot]];
            
            //console.log(window.specials[2887].boostOrb);
            //console.log(window.specials[2887].boostATK);
            p.scope.notify({
                text: 'Using the ' + ['2x ATK Boost', '1.75x Orb Boost', '2x Orb Boost', '2.25x Orb Boost'][window.specials[2887].switch[p.slot]] + '. To switch to the ' + ['1.75x Orb Boost', '2x Orb Boost', '2.25x Orb Boost', '2x ATK Boost'][window.specials[2887].switch[p.slot]] + ', disable and re-enable this special',
                name: '2887warning'
            });
        },
    },
    2888:{
        affinity: function(p) { return ((p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK")) ? 1.75 : 1; },
    },
    2889: {
        chainAddition: function(p) { return window.specials[2889].multiplier; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.DEX + p.colorCount.QCK >= 3) {
                window.specials[2889].multiplier = 0.8;
            }
            else {
                window.specials[2889].multiplier = 0;
            }
        },
    },
    2890:{
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2892: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2892].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2892].multiplier == 1.75 ? 1 : 0);
            window.specials[2892].multiplier = [1.75, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2.25][n] + 'x orb boost. To switch to the ' + [2.25, 1.75][n] + 'x orb boost, disable and re-enable this special',
                name: '2892warning'
            });
        },
    },
    2893: {
        affinity: function(p) { return p.unit.type == "STR" ? window.specials[2893].multiplier : 1; },
        onActivation: function(p) {
            if (p.captain.type == "STR") {
                window.specials[2893].multiplier = 2;
            }
            else {
                window.specials[2893].multiplier = 1;
            }
        },
    },
    2896: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 2 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2896].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Additionally affects damage if Rayleigh is your captain',
                name: '2896warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2896].turnedOn[p.slot] = false;
        }
    },
    2897: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? 2 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[2897].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Additionally affects damage if Rayleigh is your captain',
                name: '2897warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[2897].turnedOn[p.slot] = false;
        }
    },
    2900: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2900].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.PSY >= 5) {
                window.specials[2900].multiplier = 2;
            }
            else {
                window.specials[2900].multiplier = 1;
            }
        },
    },
    2901: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2901].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.PSY >= 5) {
                window.specials[2901].multiplier = 2;
            }
            else {
                window.specials[2901].multiplier = 1;
            }
        },
    },
    2902: {
        chainAddition: function(p) { return 0.6; }
    },
    2903: {
        chainAddition: function(p) { return 0.6; }
    },
    2904: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2905: {
        delay: function(p) { return 1; },	
    },
    2908:{
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 2 : 1; },
        type: "type",
    },
    2909: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
        chainAddition: function(p) { return 0.7; }
    },
    2910: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? window.specials[2910].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2910].multiplier == 1.5 ? 1 : window.specials[2910].multiplier == 1.75 ? 2 : 0);
            window.specials[2910].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x affinity boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x affinity boost, disable and re-enable this special',
                name: '2910warning'
            });
        }
    },
    2911: {
        chain: function(p) { return window.specials[2911].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[2911].multiplier == 2.75) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2911].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[2911].multiplier = 1;
            if (p.captain != null && (p.captain.type == "STR" || p.captain.type == "PSY")) {
                window.specials[2911].multiplier = 2.75;
            }
        },
    },
    2912:{
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? window.specials[2912].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[2912].multiplier == 1.75 ? 1 : window.specials[2912].multiplier == 2 ? 2 : 0);
            window.specials[2912].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '2912warning'
            });
        },
    },
    2914: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? window.specials[2914].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.STR + p.colorCount.PSY >= 4) {
                window.specials[2914].multiplier = 2.25;
            }
            else {
                window.specials[2914].multiplier = 1;
            }
        },
    },
    2915: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? window.specials[2915].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2915].multiplier == 1.5 ? 1 : window.specials[2915].multiplier == 1.75 ? 2 : 0);
            window.specials[2915].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x affinity boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x affinity boost, disable and re-enable this special',
                name: '2915warning'
            });
        }
    },
    2917: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    2918: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        type: "type",
    },
    2920: {
        atk: function(p) { return 2; },
        type: "type",
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
        warning: "Selected special (%name%) assumes that the enemy has All Debuff Protection."
    },
    2922: {
        //TODO
        hit: function(n,p) { return (n > 12 && (p.unit.type == "INT")) ? 2.25 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '2381warning'
            });
        }
    },
    2923: {
        //TODO
        hit: function(n,p) { return (n > 12 && (p.unit.type == "STR")) ? 2.25 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '2381warning'
            });
        }
    },
    2924: {
        atk: function(p) { return 1.3; },
        type: "type"
    },
    2925: {
        affinity: function(p) { return 1.3; },
    },
    2926: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.3, [p.friendCaptain, p.captain], p.effectName); },
    },
    2929: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; },
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2930: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; },
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    2931: {
        rcv: function(p) { return 1.5; },
    },
    2932: {
        orb: function(p) { return p.unit.type == "INT" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2933: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? 1.75 : 1; },
        type: "class"
    },
    2934: {
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "INT") ? 1.75 : 1; },
        type: "class"
    },
    2935: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "class"
    },
    2936: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "class"
    },
    2937: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2938: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2941: {
        delay: function(p) { return 2; },	
    },
    2942: {
        delay: function(p) { return 2; },	
    },
    2943: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    2944: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.5 : 1;
        }
    },
    2949: {
        affinity: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
    },
    2950: {
        affinity: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
    },
    2953: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    2955:{
        atk: function(p) { return window.specials[2955].turnedOn ? 1.75 : 1; },
        type: "type",
        chainAddition: function(p) { return window.specials[2955].turnedOn ? 0.65 : 0; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2955].turnedOn = p.captain != null && (p.captain.type == "STR" || p.captain.type == "INT");
        },
    },
    2956:{
        chainAddition: function(p) { return window.specials[2956].turnedOn ? 0.8 : 0; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2956].turnedOn = p.captain != null && (p.captain.type == "STR" || p.captain.type == "INT");
        },
    },
    2957: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    2958: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    2959:{
        affinity: function(p) { return (window.specials[2959].multiplier != 1 && p.unit.type == "STR") ? 2 : 1; },
        type: "type",
        chainAddition: function(p) { return window.specials[2959].multiplier != 0 ? 1.0 : 0; },
        turnedOn: false,
        onActivation: function(p) {
            var n = (window.specials[2959].multiplier == 0 ? 1 : window.specials[2959].multiplier == 1 ? 2 : 0);
            window.specials[2959].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Affinity', 'Chain Boost', 'Affinity and Chain'][n] + ' boost. To switch to the ' + ['Chain Boost', 'Affinity and Chain', 'Affinity'][n] + ' boost, disable and re-enable this special',
                name: '2959warning'
            });
        },
    },
    2960:{
        affinity: function(p) { return (window.specials[2959].multiplier != 1 && p.unit.type == "STR") ? 2 : 1; },
        type: "type",
        chainAddition: function(p) { return window.specials[2959].multiplier != 0 ? 1.0 : 0; },
        turnedOn: false,
        onActivation: function(p) {
            var n = (window.specials[2959].multiplier == 0 ? 1 : window.specials[2959].multiplier == 1 ? 2 : 0);
            window.specials[2959].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Affinity', 'Chain Boost', 'Affinity and Chain'][n] + ' boost. To switch to the ' + ['Chain Boost', 'Affinity and Chain', 'Affinity'][n] + ' boost, disable and re-enable this special',
                name: '2959warning'
            });
        },
    },
    2961: {
        atk: function(p) { return 2; },
        type: "type",
        status: function(p) { return p.delayed > 0 ? 2 : 1; },
    },
    2962: {
        atk: function(p) { return 2; },
        type: "type",
        status: function(p) { return p.delayed > 0 ? 2 : 1; },
    },
    2963:{
        orb: function(p) { return (p.slot == p.sourceSlot) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2963].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        atk: function(p) { return (p.slot == p.sourceSlot) ? window.specials[2963].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2963].multiplier == 2 ? 1 : window.specials[2963].multiplier == 3 ? 2 : 0);
            window.specials[2963].multiplier = [2, 3, 4][n];
            p.scope.notify({
                text: 'Using the ' + [2, 3, 4][n] + 'x Orb boost. To switch to the ' + [3, 4, 2][n] + 'x Orb boost, disable and re-enable this special',
                name: '2963warning'
            });
        },
    },
    2964:{
        orb: function(p) { return (p.slot == p.sourceSlot) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2964].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        atk: function(p) { return (p.slot == p.sourceSlot) ? window.specials[2964].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[2964].multiplier == 2 ? 1 : window.specials[2964].multiplier == 3 ? 2 : 0);
            window.specials[2964].multiplier = [2, 3, 4][n];
            p.scope.notify({
                text: 'Using the ' + [2, 3, 4][n] + 'x Orb boost. To switch to the ' + [3, 4, 2][n] + 'x Orb boost, disable and re-enable this special',
                name: '2964warning'
            });
        },
    },
    2971:{
        affinity: function(p) { return window.specials[2971].turnedOn ? (p.unit.type == "STR" || p.unit.type == "INT") ? 1.75 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2971].turnedOn = p.captain != null && (p.captain.type == "STR" || p.captain.type == "INT");
        },
    },
    2972:{
        affinity: function(p) { return window.specials[2972].turnedOn ? (p.unit.type == "STR" || p.unit.type == "INT") ? 1.75 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2972].turnedOn = p.captain != null && (p.captain.type == "STR" || p.captain.type == "INT");
        },
    },
    2973: {
        chain: function(p) { return window.specials[2973].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[2973].multiplier : 1;
        },
        onActivation: function(p) {
            if (p.colorCount.INT >= 5) {
                window.specials[2973].multiplier = 3;
            }
            else {
                window.specials[2973].multiplier = 2.5;
            }
        },
    },
    2974: {
        staticMult: function(p) { return 55; }
    },
    2975: {
        def: function(p) { return 0; }
    },
    2976: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        },
    },
    2977: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    2979: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; },
        type: "class",
    },
    2980: {
        atk: function(p) { return p.unit.type == "DEX" ? 2.5 : 1; },
        type: "class",
    },
    2981: {
        staticMult: function(p) { return Math.min(p.damageCounter,50000) * 20; }
    },
    2982: {
        staticMult: function(p) { return Math.min(p.damageCounter,50000) * 20; }
    },
    2985: {
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2985].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2985].multiplier = (p.captain != null && p.captain.type == "DEX") ? 2.25 : 1;
        },
    },
    2986: {
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2986].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2986].multiplier = (p.captain != null && p.captain.type == "DEX") ? 2.25 : 1;
        },
    },
    2987: {
        chainAddition: function(p) {return window.specials[2987].multiplier;},
        onActivation: function(p) {
            var n = ((window.specials[2987].multiplier == 0.5 && p.colorCount.DEX >= 3) ? 1 : 0);
            window.specials[2987].multiplier = [0.5, 1.1][n];
            p.scope.notify({
                text: 'Using the ' + [0.5, 1.1][n] + 'x chain addition. To switch to the ' + [1.1, 0.5][n] + 'x chain addition, disable and re-enable this special',
                name: '2731warning'
            });
        }
    },
    2989: {
        affinity: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
    },
    2990: {
        atk: function(p) { return p.delayed > 0 ? window.specials[2990].multiplier : 1; },
        type: "condition",
        delay: function(p) { return window.specials[2990].multiplier == 1.75 ? 2 : 0; },
        onActivation: function(p) {
            window.specials[2990].multiplier = (p.captain != null && p.captain.type == "DEX") ? 1.75 : 1;
        },
    },
    2991: {
        chain: function(p) { return 3.25; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.25 : 1;
        }
    },
    2992:{
        affinity: function(p) { return p.unit.type == "DEX" ? window.specials[2992].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[2992].multiplier == 1.75 ? 1 : window.specials[2992].multiplier == 2 ? 2 : 0);
            window.specials[2992].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Affinity boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Affinity boost, disable and re-enable this special',
                name: '2992warning'
            });
        },
    },
    2993:{
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2993].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[2993].multiplier == 1.75 ? 1 : window.specials[2993].multiplier == 2 ? 2 : 0);
            window.specials[2993].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Orb boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '2993warning'
            });
        },
    },
    2995: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[2995].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[2995].turnedOn = false;
        }
    },
    2996:{
        affinity: function(p) { return ((p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")) ? window.specials[2996].boostAffinity[p.sourceSlot] : 1; },
        atk: function(p) { return ((p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT")) ? window.specials[2996].boostATK[p.sourceSlot] : 1; },
        type: "type",
        onActivation: function(p) {
            window.specials[2996].turnedOn = (p.slot < 2) ? true : false;
            window.specials[2996].switch = window.specials[2996].switch ? window.specials[2996].switch : [undefined, undefined, undefined, undefined, undefined, undefined];
            window.specials[2996].switch[p.slot] = window.specials[2996].switch[p.slot] != undefined ? (window.specials[2996].switch[p.slot] + 1) % 4 : 0;
            
            window.specials[2996].boostAffinity = window.specials[2996].boostAffinity ? window.specials[2996].boostAffinity : [undefined, undefined, undefined, undefined, undefined, undefined];
            window.specials[2996].boostATK = window.specials[2996].boostATK ? window.specials[2996].boostATK : [undefined, undefined, undefined, undefined, undefined, undefined];
            window.specials[2996].boostAffinity[p.slot] = window.specials[2996].turnedOn ? [2.25, 1, 1, 1][window.specials[2996].switch[p.slot]] : 1;
            window.specials[2996].boostATK[p.slot] = [1, 1.75, 2, 2.25][window.specials[2996].switch[p.slot]];
            
            //console.log(window.specials[2996].boostATK);
            //console.log(window.specials[2996].boostAffinity);
            p.scope.notify({
                text: 'Using the ' + ['2.25x Affinity Boost', '1.75x ATK Boost', '2x ATK Boost', '2.25x ATK Boost'][window.specials[2996].switch[p.slot]] + '. To switch to the ' + ['1.75x ATK Boost', '2x ATK Boost', '2.25x ATK Boost', '2.25x Affinity Boost'][window.specials[2996].switch[p.slot]] + ', disable and re-enable this special',
                name: '2996warning'
            });
        },
    },
    2997: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[2997].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[2997].multiplier = (p.colorCount.STR + p.colorCount.DEX + p.colorCount.INT >= 3) ? 2 : 1;
        },
    },
    2998: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        }
    },
    3001: {
        atk: function(p) { return (p.unit.class.has("Powerhouse")) ? 1.75 : 1; },
        type: "class"
    },
    3002:{
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    3004: {
        affinity: function(p) { return p.unit.cost <= 40 ? 2 : 1; },
    },
    3006: {
        atk: function(p) { return (p.unit.type == "QCK" && window.specials[3006].multiplier != 1) ? 2.5 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.type == "QCK" && window.specials[3006].multiplier != 0) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3006].multiplier == 0 ? 1 : window.specials[3006].multiplier == 1 ? 2 : 0);
            window.specials[3006].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK', 'Change Action Orb', 'ATK and Change Action Orb'][n] + ' boost. To switch to the ' + ['Orb', 'ATK and Orb', 'ATK'][n] + ' boost, disable and re-enable this special',
                name: '3006warning'
            });
        },
    },
    3007: {
        atk: function(p) { return (p.unit.type == "QCK" && window.specials[3007].multiplier != 1) ? 2.5 : 1; },
        type: "class",
        orb: function(p) { return (p.unit.type == "QCK" && window.specials[3007].multiplier != 0) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3007].multiplier == 0 ? 1 : window.specials[3007].multiplier == 1 ? 2 : 0);
            window.specials[3007].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK', 'Change Action Orb', 'ATK and Change Action Orb'][n] + ' boost. To switch to the ' + ['Orb', 'ATK and Orb', 'ATK'][n] + ' boost, disable and re-enable this special',
                name: '3007warning'
            });
        },
    },
    3010: {
        chainAddition: function(p) { return 0.7; }
    },
    3011: {
        chainAddition: function(p) { return 0.7; }
    },
    3012: {
        atk: function(p) { return p.unit.type == "QCK" ? window.specials[3012].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[3012].multiplier == 1.75 ? 1 : 0);
            window.specials[3012].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3012warning'
            });
        }
    },
    3013: {
        atk: function(p) { return p.unit.type == "QCK" ? window.specials[3013].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[3013].multiplier == 1.75 ? 1 : 0);
            window.specials[3013].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x ATK multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3013warning'
            });
        }
    },
    3014: {
        affinity: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
        type: "type",
    },
    3015: {
        affinity: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
        atk: function(p) { return (p.unit.type == "QCK" || p.unit.type == "INT") ? 1.75 : 1; },
        type: "type",
    },
    3016: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
    },
    3018: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    3019: {
        affinity: function(p) { return (p.unit.type == "QCK") ? window.specials[3019].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[3019].multiplier == 1.5 ? 1 : window.specials[3019].multiplier == 1.75 ? 2 : 0);
            window.specials[3019].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x affinity boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x affinity boost, disable and re-enable this special',
                name: '3019warning'
            });
        }
    },
    3020:{
        orb: function(p) { return (p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3020].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3020].multiplier == 1.75 ? 1 : window.specials[3020].multiplier == 2 ? 2 : 0);
            window.specials[3020].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Orb boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '3020warning'
            });
        },
    },
    3022: {
        status: function(p) { return window.specials[3022].turnedOn ? 1.75 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[3022].turnedOn = p.captain != null && (p.captain.type == "QCK" || p.captain.type == "INT");
        },
    },
    3026: {
        orb: function(p) { return (window.specials[3026].orbmultiplier) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        chain: function(p) { return window.specials[3026].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[3026].multiplier == 2.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[3026].multiplier = 1;
            if (p.captain) if (p.captain.class.has("Fighter") || p.captain.class.has("Striker") || p.captain.class.has("Slasher") || p.captain.class.has("Shooter")) window.specials[3026].orbmultiplier = true;
            if (p.captain) if (p.captain.class.has("Free Spirit") || p.captain.class.has("Cerebral") || p.captain.class.has("Powerhouse") || p.captain.class.has("Driven")) window.specials[3026].multiplier = 2.5;
        },
        onDeactivation: function(p) {
            window.specials[3026].orbmultiplier = false;
            window.specials[3026].multiplier = 1;
        },
    },
    3027: {
        orb: function(p) { return (window.specials[3027].orbmultiplier) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        chain: function(p) { return window.specials[3027].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[3027].multiplier == 2.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 35 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[3027].multiplier = 1;
            if (p.captain) if (p.captain.class.has("Fighter") || p.captain.class.has("Striker") || p.captain.class.has("Slasher") || p.captain.class.has("Shooter")) window.specials[3027].orbmultiplier = true;
            if (p.captain) if (p.captain.class.has("Free Spirit") || p.captain.class.has("Cerebral") || p.captain.class.has("Powerhouse") || p.captain.class.has("Driven")) window.specials[3027].multiplier = 2.5;
        },
        onDeactivation: function(p) {
            window.specials[3027].orbmultiplier = false;
            window.specials[3027].multiplier = 1;
        },
    },
    3028: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? window.specials[3028].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            window.specials[3028].multiplier = 1;
            if (p.captain) if (p.captain.class.has("Fighter") || p.captain.class.has("Free Spirit")) window.specials[3028].multiplier = 2;
        },
        onDeactivation: function(p) {
            window.specials[3028].multiplier = 1;
        },
    },
    3029: {
        atk: function(p) { return (p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit")) ? window.specials[3029].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            window.specials[3029].multiplier = 1;
            if (p.captain) if (p.captain.class.has("Fighter") || p.captain.class.has("Free Spirit")) window.specials[3029].multiplier = 2;
        },
        onDeactivation: function(p) {
            window.specials[3029].multiplier = 1;
        },
    },
    3030: {
        chainAddition: function(p) { return window.specials[3030].multiplier; },
        onActivation: function(p) {
            window.specials[3030].multiplier = 0;
            if (p.captain) if (p.captain.class.has("Free Spirit") || p.captain.class.has("Striker")) window.specials[3030].multiplier = 1;
        },
        onDeactivation: function(p) {
            window.specials[3030].multiplier = 0;
        },
    },
    3031: {
        chainAddition: function(p) { return window.specials[3031].multiplier; },
        onActivation: function(p) {
            window.specials[3031].multiplier = 0;
            if (p.captain) if (p.captain.class.has("Free Spirit") || p.captain.class.has("Striker")) window.specials[3031].multiplier = 1;
        },
        onDeactivation: function(p) {
            window.specials[3031].multiplier = 0;
        },
    },
    3033: {
        orb: function(p) { return p.unit.type == "STR" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    3034: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
        type: "class"
    },
    3039: {
        affinity: function(p) { return 1.75; },
    },
    3040: {
        affinity: function(p) { return 1.75; },
    },
    3043:{
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3043].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3043].multiplier == 1.75 ? 1 : 0);
            window.specials[3043].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb boost. To switch to the ' + [2, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '3043warning'
            });
        },
    },
    3044:{
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3044].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3044].multiplier == 1.75 ? 1 : 0);
            window.specials[3044].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb boost. To switch to the ' + [2, 1.75][n] + 'x Orb boost, disable and re-enable this special',
                name: '3044warning'
            });
        },
    },
    3045: {
        chain: function(p) { return window.specials[3045].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[3045].multiplier == 2.75) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[3045].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[3045].multiplier = 1;
            if (p.colorCount.PSY >= 3) {
                window.specials[3045].multiplier = 2.75;
            }
        },
    },
    3047: {
        chainAddition: function(p) { return 0.8; }
    },
    3048: {
        turnedOn: false,
        onActivation: function(p) {
            if(window.specials[3048].multiplier == 2.25) {
                window.specials[3048].turnedOn = true;
            }
        },
        onDeactivation: function(p) {
            window.specials[3048].turnedOn = false;
        },
        atk: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "PSY") ? window.specials[3048].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[3048].multiplier == 2 ? 1 : 0);
            window.specials[3048].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x ATK multiplier. To switch to the ' + [2.25, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '3048warning'
            });
        }
    },
    3050: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
    },
    3049: {
        atk: function(p) { return (p.unit.class.has("Driven") || p.unit.class.has("Cerebral") || p.unit.class.has("Powerhouse")) ? 2 : 1; },
        type: "class"
    },
    3051: {
        affinity: function(p) { return p.unit.class.has("Free Spirit") ? 2.25 : 1; },
    },
    3056: {
        affinity: function(p) { return !(p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1 : window.specials[3056].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[3056].multiplier == 1.75 ? 1 : 0);
            window.specials[3056].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Affinity multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3056warning'
            });
        }
    },
    3057: {
        affinity: function(p) { return !(p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 1 : window.specials[3057].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[3057].multiplier == 1.75 ? 1 : 0);
            window.specials[3057].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Affinity multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3057warning'
            });
        }
    },
    3058: {
        def: function(p) { return 0.2; },
        atk: function(p) { return p.defenseDown ? window.specials[3058].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[3058].multiplier = p.classCount.FreeSpirit >= 5 ? 1.75 : 1;
        }
    },
    3059: {
        def: function(p) { return 0.2; },
        atk: function(p) { return p.defenseDown ? window.specials[3059].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            window.specials[3059].multiplier = p.classCount.FreeSpirit >= 5 ? 1.75 : 1;
        }
    },
    3061: {
        chainAddition: function(p) { return 0.7; }
    },
    3063: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class"
    },
    3066: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 1.75 : 1; },
    },
    3067: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? 1.75 : 1; },
    },
    3070: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3070].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: [false,false,false,false,false,false],
        onActivation: function(p) {
            window.specials[3070].turnedOn[p.slot] = true;
            var n = (window.specials[3070].multiplier == 2 ? 1 : 0);
            window.specials[3070].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x Orb Boost. To switch to the ' + [2, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '3070warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[3070].turnedOn[p.slot] = false;
        }
    },
    3071: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3071].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: [false,false,false,false,false,false],
        onActivation: function(p) {
            window.specials[3071].turnedOn[p.slot] = true;
            var n = (window.specials[3071].multiplier == 2 ? 1 : 0);
            window.specials[3071].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x Orb Boost. To switch to the ' + [2, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '3071warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[3071].turnedOn[p.slot] = false;
        }
    },
    3072: {
        affinity: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type",
        chainAddition: function(p) { return 1.1; }
    },
    3073: {
        affinity: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type",
        chainAddition: function(p) { return 1.1; }
    },
    3074: {
        affinity: function(p) { return window.specials[3074].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[3074].multiplier == 1.75 ? 1 : 0);
            window.specials[3074].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Affinity multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3074warning'
            });
        }
    },
    3075: {
        affinity: function(p) { return window.specials[3075].multiplier; },
        onActivation: function(p) {
            var n = (window.specials[3075].multiplier == 1.75 ? 1 : 0);
            window.specials[3075].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Affinity multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3075warning'
            });
        }
    },
    3076: {
        atk: function(p) { return window.specials[3076].multiplier; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[3076].multiplier == 1.75 ? 1 : 0);
            window.specials[3076].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Affinity multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3076warning'
            });
        }
    },
    3077: {
        atk: function(p) { return window.specials[3077].multiplier; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[3077].multiplier == 1.75 ? 1 : 0);
            window.specials[3077].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Affinity multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3077warning'
            });
        }
    },
    3078: {
        atk: function(p) { return (p.delayed > 0 && window.specials[3078].multiplier != 0) ? 1.75 : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[3078].multiplier == 1 ? 2 : (window.specials[3078].multiplier == 2 | window.specials[3078].multiplier == undefined) ? 0 : 1);
            window.specials[3078].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Delay', 'Conditional boost', 'Conditional boost and Delay'][n] + '. To switch to the ' + ['Conditional boost', 'Conditional boost and Delay', 'Delay'][n] + ', disable and re-enable this special',
                name: '3078warning'
            });
        },
        delay: function(p) { return window.specials[3078].multiplier != 1 ? 1 : 0; },
    },
    3079: {
        atk: function(p) { return p.unit.class.has("Shooter") || p.unit.class.has("Driven") ? 2 : 1; },
        type: "class"
    },
    3080:{
        orb: function(p) { return window.specials[3080].turnedOn ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[3080].turnedOn = p.captain != null && (p.captain.type == "STR" || p.captain.type == "PSY");
        },
    },
    3081:{
        atk: function(p) { return window.specials[3081].turnedOn ? 1.75 : 1; },
        type: "class",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[3081].turnedOn = p.captain != null && (p.captain.type == "STR" || p.captain.type == "PSY");
        },
    },
    3082: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    3083: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3083].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2 : 1.75);
            window.specials[3083].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '3083warning'
            });
        }
    },
    3085:{
        orb: function(p) { return window.specials[3085].turnedOn ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[3085].turnedOn = p.captain != null && (p.captain.type == "STR");
        },
    },
    3088: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3088].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3088].multiplier == 1.5 ? 1 : window.specials[3088].multiplier == 1.75 ? 2 : 0);
            window.specials[3088].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 1.75, 2][n] + 'x orb boost. To switch to the ' + [1.75, 2, 1.5][n] + 'x orb boost, disable and re-enable this special',
                name: '3088warning'
            });
        }
    },
    3089:{
        def: function(p) { return 0; },
        atk: function(p) { return p.defenseDown ? window.specials[3089].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[3089].multiplier == 1.75 ? 1 : window.specials[3089].multiplier == 2 ? 2 : 0);
            window.specials[3089].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x Conditional boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x Conditional boost, disable and re-enable this special',
                name: '2132warning'
            });
        },
    },
    3090: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    3091: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        type: "class"
    },
    3092: {
        def: function(p) { return 0; },
    },
    3094: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "INT") ? window.specials[3094].multiplier : 1; },
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2 : 1.75);
            window.specials[3094].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '3094warning'
            });
        }
    },
    3095: {
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    3097: {
        orb: function(p) { return (p.captain.class.has("Fighter") || p.captain.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3097].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },	
        onActivation: function(p) {
            window.specials[3097].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Cerebral")) ? 2.25 : 1;
        }
    },
    3099: {
        atk: function(p) { return p.unit.type == "INT" ? window.specials[3099].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[3099].multiplier == 2.25 ? 1 : 0);
            window.specials[3099].multiplier = [2.25, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + [2.25, 2.5][n] + 'x ATK multiplier. To switch to the ' + [2.5, 2.25][n] + 'x multiplier, disable and re-enable this special',
                name: '3099warning'
            });
        },
    },
    3100: {
        atk: function(p) { return p.unit.type == "INT" ? window.specials[3100].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[3100].multiplier == 2.25 ? 1 : 0);
            window.specials[3100].multiplier = [2.25, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + [2.25, 2.5][n] + 'x ATK multiplier. To switch to the ' + [2.5, 2.25][n] + 'x multiplier, disable and re-enable this special',
                name: '3100warning'
            });
        },
    },
    3101: {
        orb: function(p) { return p.unit.type == "INT" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3101].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3101].multiplier == 2.25 ? 1 : 0);
            window.specials[3101].multiplier = [2.25, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + [2.25, 2.5][n] + 'x ATK multiplier. To switch to the ' + [2.5, 2.25][n] + 'x multiplier, disable and re-enable this special',
                name: '3101warning'
            });
        },
    },
    3102: {
        orb: function(p) { return p.unit.type == "INT" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3102].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3102].multiplier == 2.25 ? 1 : 0);
            window.specials[3102].multiplier = [2.25, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + [2.25, 2.5][n] + 'x ATK multiplier. To switch to the ' + [2.5, 2.25][n] + 'x multiplier, disable and re-enable this special',
                name: '3102warning'
            });
        },
    },
    3107: {
        def: function(p) { return 0.2; },
        atk: function(p) { return p.defenseDown ? 1.75 : 1; },
        type: "condition",
    },
    3108: {
        affinity: function(p) { return p.unit.type == "INT" ? 2 : 1; },
    },
    3110: {
        chain: function(p) { return window.specials[3110].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[3110].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[3110].multiplier == 3 ? 1 : window.specials[3110].multiplier == 3.25 ? 2 : 0);
            window.specials[3110].multiplier = [3, 3.25, 3.5][n];
            p.scope.notify({
                text: 'Using the ' + [3, 3.25, 3.5][n] + 'x Chain Lock. To switch to the ' + [3.25, 3.5, 3][n] + 'x multiplier, disable and re-enable this special',
                name: '3110warning'
            });
        },
    },
    3112:{
        affinity: function(p) { return p.unit.type == "INT" ? window.specials[3112].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[3112].multiplier == 1.75 ? 1 : window.specials[3112].multiplier == 2 ? 2 : 0);
            window.specials[3112].multiplier = [1.75, 2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2, 2.25][n] + 'x ATK boost. To switch to the ' + [2, 2.25, 1.75][n] + 'x ATK boost, disable and re-enable this special',
                name: '3112warning'
            });
        },
    },
    3114: {
        chain: function(p) { return window.specials[3114].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[3114].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[3114].multiplier == 2.5 ? 1 : window.specials[3114].multiplier == 2.75 ? 2 : 0);
            window.specials[3114].multiplier = [2.5, 2.75, 3][n];
            p.scope.notify({
                text: 'Using the ' + ['2.5x', '2.75x', '3x'][n] + ' chain lock. To switch to the ' + ['2.5x', '2.75x', '3x'][n] + ' chain lock, disable and re-enable this special',
                name: '3114warning'
            });
        },
    },
    3117: {
        affinity: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 2 : 1; },
        chainAddition: function(p) { return window.specials[3117].multiplier; },
        onActivation: function(p) {
            window.specials[3117].multiplier = 0;
            if (p.colorCount.INT >= 4) {
                window.specials[3117].multiplier = 1;
            }
        },
    },
    3118: {
        affinity: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 2 : 1; },
        chainAddition: function(p) { return window.specials[3118].multiplier; },
        onActivation: function(p) {
            window.specials[3118].multiplier = 0;
            if (p.colorCount.INT >= 4) {
                window.specials[3118].multiplier = 1;
            }
        },
    },
    3120: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
    },
    3122: {
        atk: function(p) { return 2; },
        type: "type",
    },
    3125: {
        affinity: function(p) { return 1.75; }
    },
    3126: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? window.specials[3126].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[3126].multiplier == 1.75 ? 1 : 0);
            window.specials[3126].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3126warning'
            });
        }
    },
    3127: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? window.specials[3127].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (window.specials[3127].multiplier == 1.75 ? 1 : 0);
            window.specials[3127].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3127warning'
            });
        }
    },
    3128: {
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3128].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3128].multiplier == 1.75 ? 1 : 0);
            window.specials[3128].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3128warning'
            });
        }
    },
    3129: {
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Powerhouse")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3129].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3129].multiplier == 1.75 ? 1 : 0);
            window.specials[3129].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3129warning'
            });
        }
    },
    3130: {
        orb: function(p) { return p.unit.class.has("Free Spirit") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    3138: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    3139: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    3140: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
    },
    3141: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
    },
    3142: {
        staticMult: function(p) { return 70; }
    },
    3143: {
        affinity: function(p) { return 1.75; }
    },
    3144: {
        affinity: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.75 : 1; }
    },
    3145: {
        orb: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3145].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName)},
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[3145].multiplier == 2 ? 1 : 0);
            window.specials[3145].multiplier = [2, 2.25][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.25][n] + 'x Orb boost. To switch to the ' + [2.25, 2][n] + 'x Orb boost, disable and re-enable this special',
                name: '3145warning'
            });
        },
    },
    3146: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "INT") ? window.specials[3146].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[3146].multiplier == 1.75 ? 1 : 0);
            window.specials[3146].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Affinity multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3146warning'
            });
        }
    },
    3147: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3147].multiplier, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3147].multiplier == 1.75 ? 1 : 0);
            window.specials[3147].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Affinity multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3147warning'
            });
        }
    },
    3148: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        },
    },
    3150: {
        atk: function(p) { return [ 2, 1, 1, 2, 1, 2, 2 ][window.specials[3150].multiplier]; },
        type: "class",
        affinity: function(p) { return [ 1, 1.75, 1, 1.75, 1.75, 1, 1.75 ][window.specials[3150].multiplier]; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1, 1, 1.75, 1, 1.75, 1.75, 1.75 ][window.specials[3150].multiplier], [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3150].multiplier == undefined ? 0 : (window.specials[3150].multiplier + 1) % 7);
            window.specials[3150].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + [ 2, 1, 1, 2, 1, 2, 2 ][n] + 'x ATK boost, the ' + [ 1, 1.75, 1, 1.75, 1.75, 1, 1.75 ][n] + 'x Affinity boost and the ' + [ 1, 1, 1.75, 1, 1.75, 1.75, 1.75 ][n] + 'x Orb boost. To switch disable and re-enable this special',
                name: '3150warning'
            });
        },
    },
    3151: {
        chainAddition: function(p) { return window.specials[2854].multiplier; },
        onActivation: function(p) {
            window.specials[2854].multiplier = 0;
            if (p.captain.class.has("Fighter") || p.captain.class.has("Slasher") || p.captain.class.has("Free Spirit")) {
                window.specials[2854].multiplier = 1;
            }
        },
    },
    3152: {
        orb: function(p) { return (p.unit.class.has("Powerhouse") || p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has All Debuff Protection."
    },
    3156: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 2.25 : 1; },
        type: "type",
        def: function(p) { return 0; },
        status: function(p) { return p.defenseDown > 0 ? 1.75 : 1; },
    },
    3157: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 2.25 : 1; },
        type: "type",
        def: function(p) { return 0; },
        status: function(p) { return p.defenseDown > 0 ? 1.75 : 1; },
    },
    3160: {
        atk: function(p) { return 1.5; },
        type: "condition",
        warning: "Selected special (%name%) assumes that the enemy has been poisoned or STRONGLY Poisoned."
    },
    3161: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    3162: {
        atk: function(p) { return 1.5; },
        type: "type",
    },
    3167: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? 1.75 : 1; }
    },
    3168: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") || p.unit.class.has("Free Spirit") ? 1.75 : 1; }
    },
    3171: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3172: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
    },
    3173: {
        chain: function(p) { return 2.75; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 2.75 : 1;
        },
    },
    3174: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.class.has("Free Spirit") || p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    3175: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.class.has("Free Spirit") || p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    3176: {
        atk: function(p) { return window.specials[3176].multiplier; },
        type: "type",
        onActivation: function(p) {
            var levels = [2, 2.5, 3];
            var n = (levels.indexOf(window.specials[3176].multiplier) + 1) % levels.length;
            window.specials[3176].multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x ATK boost. To switch to the ' + levels[(n + 1) % levels.length] + ' ATK boost, disable and re-enable this special',
                name: '3176warning'
            });
        },
    },
    3177: {
        atk: function(p) { return window.specials[3177].multiplier; },
        type: "type",
        onActivation: function(p) {
            var levels = [2, 2.5, 3];
            var n = (levels.indexOf(window.specials[3177].multiplier) + 1) % levels.length;
            window.specials[3177].multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x ATK boost. To switch to the ' + levels[(n + 1) % levels.length] + ' ATK boost, disable and re-enable this special',
                name: '3177warning'
            });
        },
    },
    3178: {
        atk: function(p) { return p.delayed > 0 ? 2 : 1; },
        type: "condition",
    },
    3179: {
        atk: function(p) { return p.delayed > 0 ? 2 : 1; },
        type: "condition",
    },
    3180: {
        delay: function(p) { return 1; },
        chainAddition: function(p) { return 0.8; }
    },
    3181: {
        delay: function(p) { return 1; },
        chainAddition: function(p) { return 0.8; }
    },
    3184: {
        affinity: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" ? 2 : 1; }
    },
    3185: {
        affinity: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" ? 2 : 1; }
    },
    3186: {
        chain: function(p) { return 1.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 30 : 1;
        },
    },
    3187: {
        chainAddition: function(p) { return 0.7; }
    },
    3188: {
        atk: function(p) { return window.specials[3188].multiplier1; },
        type: "type",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3188].multiplier2, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[3188].multiplier1 = p.colorCount.STR >= 4 ? 1.75 : 1;
            window.specials[3188].multiplier2 = p.colorCount.PSY >= 4 ? 1.75 : 1;
        },
    },
    3189: {
        atk: function(p) { return (p.defenseDown && window.specials[3189].multiplier != 0) ? 1.75 : 1; },
        type: "condition",
        def: function(p) { return window.specials[3189].multiplier != 1 ? 0 : 1; },
        onActivation: function(p) {
            var n = (window.specials[3189].multiplier == 1 ? 2 : (window.specials[3189].multiplier == 2 | window.specials[3189].multiplier == undefined) ? 0 : 1);
            window.specials[3189].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['Defense Reduction', 'Conditional boost', 'Conditional boost and Defense Reduction'][n] + '. To switch to the ' + ['Conditional boost', 'Conditional boost and Defense Reduction', 'Defense Reduction'][n] + ', disable and re-enable this special',
                name: '3189warning'
            });
        },
    },
    3190: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3191: {
        atk: function(p) { return p.defenseDown ? window.specials[3191].multiplier : 1; },
        type: "condition",
        onActivation: function(p) {
            var n = (window.specials[3191].multiplier == 1.5 ? 1 : 0);
            window.specials[3191].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.5, 2][n] + 'x Conditional multiplier. To switch to the ' + [2, 1.5][n] + 'x multiplier, disable and re-enable this special',
                name: '3191warning'
            });
        }
    },
    3192: {
        affinity: function(p) { return 1.75; }
    },
    3194: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class"
    },
    3195: {
        delay: function(p) { return 1; },
    },
    3196: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    3197: {
        atk: function(p) { return window.specials[3197].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[3197].multiplier = 1;
            if (p.captain) if (p.captain.class.has("Fighter") || p.captain.class.has("Striker") || p.captain.class.has("Slasher") || p.captain.class.has("Shooter")) window.specials[3197].multiplier = 1.75;
        },
        onDeactivation: function(p) {
            window.specials[3197].multiplier = 1;
        },
    },
    3198:{
        affinity: function(p) { return window.specials[3198].turnedOn ? 1.75 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[3198].turnedOn = p.captain != null && (p.captain.type == "STR" || p.captain.type == "QCK");
        },
    },
    3199:{
        orb: function(p) { return window.specials[3199].turnedOn ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[3199].turnedOn = p.captain != null && (p.captain.type == "STR" || p.captain.type == "INT");
        },
    },
    3201:{
        affinity: function(p) { return 1.5; },
    },
    3202: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 2.25 : 1; },
        type: "class"
    },
    3206: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    3207: {
        atk: function(p) { return 2; },
        type: "type",
    },
    3209: {
        atk: function(p) { return window.specials[3209].multiplier == 0 ? 1.75 : 1; },
        orb: function(p) { return window.specials[3209].turnedOn == 1 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        type: "type",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(window.specials[3209].multiplier) + 1) % levels.length;
            window.specials[3209].multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["ATK", "ORB"][levels[n]] + ' boost. To switch to the ' + ["ATK", "ORB"][levels[(n + 1) % levels.length]] + ' boost, disable and re-enable this special',
                name: '3209warning'
            });
        },
    },
    3210: {
        chainAddition: function(p) { return window.specials[3210].multiplier1; },
        chain: function(p) { return window.specials[3210].multiplier2; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[3210].multiplier2 != 1) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[3210].multiplier2 : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[3210].multiplier1 = p.colorCount.PSY >= 3 ? 0.75 : 0;
            window.specials[3210].multiplier2 = (p.colorCount.QCK + p.colorCount.DEX + p.colorCount.INT) >= 3 ? 3 : 1;
        },
    },
    3211: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2.25 : 1; },
        type: "class",
    },
    3212: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 2.25 : 1; },
        type: "class",
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    3213: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
    },
    3214: {
        chain: function(p) { return window.specials[3214].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[3214].multiplier : 1;
        },
        onActivation: function(p) {
            var levels = [2.75, 3];
            var n = (levels.indexOf(window.specials[3214].multiplier) + 1) % levels.length;
            window.specials[3214].multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + ' chain lock. To switch to the ' + levels[(n + 1) % levels.length] + ' chain lock, disable and re-enable this special',
                name: '3214warning'
            });
        },
    },
    3215: {
        affinity: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" ? window.specials[3215].multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.75, 2.25];
            var n = (levels.indexOf(window.specials[3215].multiplier) + 1) % levels.length;
            window.specials[3215].multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + ' chain lock. To switch to the ' + levels[(n + 1) % levels.length] + ' chain lock, disable and re-enable this special',
                name: '3215warning'
            });
        },
    },
    3218: {
        chainAddition: function(p) { return window.specials[3218].multiplier; },
        onActivation: function(p) {
            window.specials[3218].multiplier = 0;
            if (p.captain.class.has("Slasher") || p.captain.class.has("Cerebral")) {
                window.specials[3218].multiplier = 1;
            }
        },
    },
    3219: {
        chainAddition: function(p) { return window.specials[3219].multiplier; },
        onActivation: function(p) {
            window.specials[3219].multiplier = 0;
            if (p.captain.class.has("Slasher") || p.captain.class.has("Cerebral")) {
                window.specials[3219].multiplier = 1;
            }
        },
    },
    3220: {
        affinity: function(p) { return window.specials[3220].multiplier; },
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2 : 1.75);
            window.specials[3220].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '3220warning'
            });
        }
    },
    3221: {
        affinity: function(p) { return window.specials[3221].multiplier; },
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2 : 1.75);
            window.specials[3221].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '3221warning'
            });
        }
    },
    3222: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "DEX" ? 1.75 : 1; },
        type: "type",
    },
    3223: {
        affinity: function(p) { return p.unit.type == "QCK" || p.unit.type == "DEX" ? 1.75 : 1; },
    },
    3224: {
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3224].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) { window.specials[3224].multiplier = p.damageCounter >= 20000 ? 2.75 : 2.5; }
    },
    3225: {
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3225].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) { window.specials[3225].multiplier = p.damageCounter >= 20000 ? 2.75 : 2.5; }
    },
    3226: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[3226].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Kaido is your captain',
                name: '3226warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[3226].turnedOn[p.slot] = false;
        }
    },
    3227: {
        turnedOn: [ false, false, false, false, false, false ],
        onActivation: function(p) {
            window.specials[3227].turnedOn[p.slot] = true;
            p.scope.notify({
                text: 'Only affects damage if Kaido is your captain',
                name: '3227warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[3227].turnedOn[p.slot] = false;
        }
    },
    3228: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    3229: {
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    3233: {
        atk: function(p) { return window.specials[3233].multiplier == 0 ? 1.75 : 1; },
        type: "type",
        orb: function(p) { return window.specials[3233].multiplier == 1 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var levels = ['Orb Boost', 'ATK Boost'];
            var n = (window.specials[3233].multiplier == undefined ? 0 : (window.specials[3233].multiplier + 1) % 2);
            window.specials[3233].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + levels[n] + '. To switch to the ' + levels[(n + 1) % levels.length] + ', disable and re-enable this special',
                name: '3176warning'
            });
        },
    },
    3235: {
        delay: function(p) { return 2; },
        def: function(p) { return 0; },
        atk: function(p) { return [p.defenseDown ? 2 : 1, p.delayed > 0 ? 2 : 1][window.specials[3235].multiplier]; },
        type: "condition",
        onActivation: function(p) {
            var levels = [0, 1];
            var n = (levels.indexOf(window.specials[3235].multiplier) + 1) % levels.length;
            window.specials[3235].multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + ["DEF Down", "Delay"][levels[n]] + ' boost. To switch to the ' + ["DEF Down", "Delay"][levels[(n + 1) % levels.length]] + ' boost, disable and re-enable this special',
                name: '3235warning'
            });
        },
    },
    3236: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "DEX" ? window.specials[3236].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var levels = [1.75, 2.25];
            var n = (levels.indexOf(window.specials[3236].multiplier) + 1) % levels.length;
            window.specials[3236].multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x ATK boost. To switch to the ' + levels[(n + 1) % levels.length] + ' ATK boost, disable and re-enable this special',
                name: '3236warning'
            });
        },
    },
    3237: {
        affinity: function(p) { return p.unit.type == "QCK" || p.unit.type == "DEX" ? window.specials[3237].multiplier : 1; },
        onActivation: function(p) {
            var levels = [1.75, 2.25];
            var n = (levels.indexOf(window.specials[3237].multiplier) + 1) % levels.length;
            window.specials[3237].multiplier = levels[n];
            p.scope.notify({
                text: 'Using the ' + levels[n] + 'x ATK boost. To switch to the ' + levels[(n + 1) % levels.length] + ' ATK boost, disable and re-enable this special',
                name: '3237warning'
            });
        },
    },
    3238: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
    },
    3240: {
        orb: function(p) { return p.unit.class.has("Slasher") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    3241: {
        //TODO
        hit: function(n,p) { return (n > 12 && (p.unit.type == "QCK")) ? 2.25 : 1; },
        onActivation: function(p) {
            p.scope.notify({
                text: 'This ability currently stacks with regular attack boosts when it does not in-game, so please keep that in mind.',
                name: '3241warning'
            });
        }
    },
    3242: {
        atk: function(p) { return p.unit.class.has("Driven") || p.unit.class.has("Cerebral") ? window.specials[3242].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.25 : 2);
            window.specials[3242].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.25 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5074warning'
            });
        }
    },
    3244: {
        affinity: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; },
    },
    3245: {
        affinity: function(p) { return p.unit.type == "PSY" ? 2.25 : 1; },
    },
    3246:{
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? window.specials[3246].multiplier : 1; },
        type: "type",
        turnedOn: false,
        onActivation: function(p) {
            window.specials[3198].multiplier = p.captain != null && (p.captain.type == "STR" || p.captain.type == "DEX" || p.captain.type == "QCK") ? 2 : 1.75;
        },
    },
    3247: {
        orb: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    3248: {
        atk: function(p) { return p.delayed > 0 ? window.specials[3248].multiplier : 1; },
        type: "condition",
        delay: function(p) { return 1; },
        onActivation: function(p) {
            var levels = [1.75, 1];
            var n = (levels.indexOf(window.specials[3248].multiplier) + 1) % levels.length;
            window.specials[3248].multiplier = levels[n];
            p.scope.notify({
                text: '' + ["Activating Conditional", "Not Activating Conditional"][n] + ' boost. To ' + ["Enable the Conditional", "Disable the Conditional"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '3248warning'
            });
        },
    },
    3249: {
        atk: function(p) { return p.defenseDown ? window.specials[3249].multiplier : 1 },
        type: "condition",
        def: function(p) { return 0; },
        onActivation: function(p) {
            var levels = [1.75, 1];
            var n = (levels.indexOf(window.specials[3249].multiplier) + 1) % levels.length;
            window.specials[3249].multiplier = levels[n];
            p.scope.notify({
                text: '' + ["Activating Conditional", "Not Activating Conditional"][n] + ' boost. To ' + ["Enable the Conditional", "Disable the Conditional"][(n + 1) % levels.length] + ' boost, disable and re-enable this special',
                name: '3249warning'
            });
        },
    },
    3333: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3334: {
        atk: function(p) { return 1.75; },
        type: "type",
    },
    3339: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    3340: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    3347: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
    },
    3348: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName); },
    },
    3351: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
        type: "class"
    },
    3352: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
        type: "class"
    },
    3356: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
    },
    3357: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
    },
    3358: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    3359: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    3366: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class"
    },
    3367: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class"
    },
    3368: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class"
    },
    3374: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5, [p.friendCaptain, p.captain], p.effectName); },
    },
    3375: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "class"
    },
    3376: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "class"
    },
    3382: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[3382].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[3382].multiplier == 1.75 ? 1 : 0);
            window.specials[3382].multiplier = [1.75, 2][n];
            p.scope.notify({
                text: 'Using the ' + [1.75, 2][n] + 'x Orb multiplier. To switch to the ' + [2, 1.75][n] + 'x multiplier, disable and re-enable this special',
                name: '3382warning'
            });
        }
    },
    5000: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 1.5 : 1; },
        type: "type",
    },
    5001: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 1.5 : 1; },
        type: "type",
    },
    5002: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 1.5 : 1; },
        type: "type",
    },
    5003: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "INT" ? 1.5 : 1; },
        type: "type",
    },
    5004: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    5005: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    5006: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    5007: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    5008: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    5009: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    5010: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    5011: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); }
    },
    5012: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5013: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5014: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5015: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "PSY") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5024: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" ? 1.5 : 1; },
        type: "type",
    },
    5025: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" ? 1.5 : 1; },
        type: "type",
    },
    5026: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" ? 1.5 : 1; },
        type: "type",
    },
    5027: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" ? 1.5 : 1; },
        type: "type",
    },
    5028: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5029: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5030: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5031: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5032: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5033: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5034: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5035: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Fighter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5036: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        type: "class",
    },
    5037: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        type: "class",
    },
    5038: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        type: "class",
    },
    5039: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        type: "class",
    },
    5040: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        type: "class",
    },
    5041: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        type: "class",
    },
    5042: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        type: "class",
    },
    5043: {
        atk: function(p) { return p.unit.class.has("Driven") ? 2.25 : 1; },
        type: "class",
    },
    5044: {
        atk: function(p) { return p.delayed > 0 ? window.specials[5044].multiplier : 1; },
        type: "condition",
        delay: function(p) { return window.specials[5044].multiplier == 1.75 ? 2 : 0; },
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.75 : 1);
            window.specials[5044].multiplier = n;
        }
    },
    5045: {
        atk: function(p) { return p.delayed > 0 ? window.specials[5045].multiplier : 1; },
        type: "condition",
        delay: function(p) { return window.specials[5045].multiplier == 1.75 ? 2 : 0; },
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.75 : 1);
            window.specials[5045].multiplier = n;
        }
    },
    5046: {
        atk: function(p) { return p.delayed > 0 ? window.specials[5046].multiplier : 1; },
        type: "condition",
        delay: function(p) { return window.specials[5046].multiplier == 1.75 ? 2 : 0; },
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.75 : 1);
            window.specials[5046].multiplier = n;
        }
    },
    5047: {
        atk: function(p) { return p.delayed > 0 ? window.specials[5047].multiplier : 1; },
        type: "condition",
        delay: function(p) { return window.specials[5047].multiplier == 1.75 ? 2 : 0; },
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.75 : 1);
            window.specials[5047].multiplier = n;
        }
    },
    5048: {
        atk: function(p) { return p.delayed > 0 ? window.specials[5048].multiplier : 1; },
        type: "condition",
        delay: function(p) { return window.specials[5048].multiplier == 1.75 ? 2 : 0; },
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.75 : 1);
            window.specials[5048].multiplier = n;
        }
    },
    5049: {
        atk: function(p) { return p.delayed > 0 ? window.specials[5049].multiplier : 1; },
        type: "condition",
        delay: function(p) { return window.specials[5049].multiplier == 1.75 ? 2 : 0; },
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.75 : 1);
            window.specials[5049].multiplier = n;
        }
    },
    5050: {
        atk: function(p) { return p.delayed > 0 ? window.specials[5050].multiplier : 1; },
        type: "condition",
        delay: function(p) { return window.specials[5050].multiplier == 1.75 ? 2 : 0; },
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.75 : 1);
            window.specials[5050].multiplier = n;
        }
    },
    5051: {
        atk: function(p) { return p.delayed > 0 ? window.specials[5051].multiplier : 1; },
        type: "condition",
        delay: function(p) { return window.specials[5051].multiplier == 1.75 ? 2 : 0; },
        onActivation: function(p) {
            var n = (p.percHP <= 50 ? 1.75 : 1);
            window.specials[5051].multiplier = n;
        }
    },
    5052: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5053: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5054: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5055: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5056: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5057: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5058: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5059: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5060: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5061: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5062: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5063: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5064: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5065: {
        orb: function(p) { return (p.unit.type == "QCK" || p.unit.type == "PSY" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5066:{
        affinity: function(p) { return window.specials[5066].turnedOn ? (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[5066].turnedOn = p.captain != null && (p.captain.type == "QCK" || p.captain.type == "INT");
        },
    },
    5067:{
        affinity: function(p) { return window.specials[5067].turnedOn ? (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[5067].turnedOn = p.captain != null && (p.captain.type == "QCK" || p.captain.type == "INT");
        },
    },
    5068:{
        affinity: function(p) { return window.specials[5068].turnedOn ? (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[5068].turnedOn = p.captain != null && (p.captain.type == "QCK" || p.captain.type == "INT");
        },
    },
    5069:{
        affinity: function(p) { return window.specials[5069].turnedOn ? (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[5069].turnedOn = p.captain != null && (p.captain.type == "QCK" || p.captain.type == "INT");
        },
    },
    5070:{
        affinity: function(p) { return window.specials[5070].turnedOn ? (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[5070].turnedOn = p.captain != null && (p.captain.type == "QCK" || p.captain.type == "INT");
        },
    },
    5071:{
        affinity: function(p) { return window.specials[5071].turnedOn ? (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[5071].turnedOn = p.captain != null && (p.captain.type == "QCK" || p.captain.type == "INT");
        },
    },
    5072:{
        affinity: function(p) { return window.specials[5072].turnedOn ? (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[5072].turnedOn = p.captain != null && (p.captain.type == "QCK" || p.captain.type == "INT");
        },
    },
    5073:{
        affinity: function(p) { return window.specials[5073].turnedOn ? (p.unit.type == "QCK" || p.unit.type == "INT") ? 2 : 1 : 1; },
        turnedOn: false,
        onActivation: function(p) {
            window.specials[5073].turnedOn = p.captain != null && (p.captain.type == "QCK" || p.captain.type == "INT");
        },
    },
    5074: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Fighter")) ? window.specials[5074].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.75 : 2);
            window.specials[5074].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.75 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5074warning'
            });
        }
    },
    5075: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Fighter")) ? window.specials[5075].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.75 : 2);
            window.specials[5075].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.75 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5075warning'
            });
        }
    },
    5076: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Fighter")) ? window.specials[5076].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.75 : 2);
            window.specials[5076].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.75 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5076warning'
            });
        }
    },
    5077: {
        atk: function(p) { return (p.unit.class.has("Slasher") || p.unit.class.has("Fighter")) ? window.specials[5077].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.75 : 2);
            window.specials[5077].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.75 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5077warning'
            });
        }
    },
    5078: {
        atk: function(p) { return 1.75; },
        type: "class"
    },
    5079: {
        atk: function(p) { return 1.75; },
        type: "class"
    },
    5080: {
        atk: function(p) { return 1.75; },
        type: "class"
    },
    5081: {
        atk: function(p) { return 1.75; },
        type: "class"
    },
    5082: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    5083: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    5084: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    5085: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    5086: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    5087: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    5088: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    5089: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName); }
    },
    5090: {
        atkbase: function(p) { return Math.min(1000,window.specials[5090].momBoost); },
        chain: function(p) { return window.specials[5090].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[5090].multiplier == 3.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5090].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[5090].multiplier = 1;
            if (p.percHP >= 50) {
                window.specials[5090].multiplier = 3.5;
            }
            window.specials[5090].momBoost = Math.floor(p.percHP*p.maxHP/10000);
        },
    },
    5091: {
        atkbase: function(p) { return Math.min(1000,window.specials[5091].momBoost); },
        chain: function(p) { return window.specials[5091].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[5091].multiplier == 3.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5091].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[5091].multiplier = 1;
            if (p.percHP >= 50) {
                window.specials[5091].multiplier = 3.5;
            }
            window.specials[5091].momBoost = Math.floor(p.percHP*p.maxHP/10000);
        },
    },
    5092: {
        atkbase: function(p) { return Math.min(1000,window.specials[5092].momBoost); },
        chain: function(p) { return window.specials[5092].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[5092].multiplier == 3.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5092].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[5092].multiplier = 1;
            if (p.percHP >= 50) {
                window.specials[5092].multiplier = 3.5;
            }
            window.specials[5092].momBoost = Math.floor(p.percHP*p.maxHP/10000);
        },
    },
    5093: {
        atkbase: function(p) { return Math.min(1000,window.specials[5093].momBoost); },
        chain: function(p) { return window.specials[5093].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[5093].multiplier == 3.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5093].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[5093].multiplier = 1;
            if (p.percHP >= 50) {
                window.specials[5093].multiplier = 3.5;
            }
            window.specials[5093].momBoost = Math.floor(p.percHP*p.maxHP/10000);
        },
    },
    5094: {
        atkbase: function(p) { return Math.min(1000,window.specials[5094].momBoost); },
        chain: function(p) { return window.specials[5094].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[5094].multiplier == 3.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5094].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[5094].multiplier = 1;
            if (p.percHP >= 50) {
                window.specials[5094].multiplier = 3.5;
            }
            window.specials[5094].momBoost = Math.floor(p.percHP*p.maxHP/10000);
        },
    },
    5095: {
        atkbase: function(p) { return Math.min(1000,window.specials[5095].momBoost); },
        chain: function(p) { return window.specials[5095].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            if (window.specials[5095].multiplier == 3.5) return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5095].multiplier : 1;
            else return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? Infinity : 1;
        },
        onActivation: function(p) {
            window.specials[5095].multiplier = 1;
            if (p.percHP >= 50) {
                window.specials[5095].multiplier = 3.5;
            }
            window.specials[5095].momBoost = Math.floor(p.percHP*p.maxHP/10000);
        },
    },
    5096: {
        atk: function(p) { return !(p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1 : window.specials[5096].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[5096].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) ? 2 : 1;
        }
    },
    5097: {
        atk: function(p) { return !(p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1 : window.specials[5097].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[5097].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) ? 2 : 1;
        }
    },
    5098: {
        atk: function(p) { return !(p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1 : window.specials[5098].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[5098].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) ? 2 : 1;
        }
    },
    5099: {
        atk: function(p) { return !(p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1 : window.specials[5099].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[5099].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) ? 2 : 1;
        }
    },
    5100: {
        atk: function(p) { return !(p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1 : window.specials[5100].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[5100].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) ? 2 : 1;
        }
    },
    5101: {
        atk: function(p) { return !(p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1 : window.specials[5101].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[5101].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) ? 2 : 1;
        }
    },
    5102: {
        atk: function(p) { return !(p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1 : window.specials[5102].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[5102].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) ? 2 : 1;
        }
    },
    5103: {
        atk: function(p) { return !(p.unit.class.has("Fighter") || p.unit.class.has("Slasher") || p.unit.class.has("Powerhouse")) ? 1 : window.specials[5103].multiplier; },
        type: "type",
        onActivation: function(p) {
            window.specials[5103].multiplier = (p.captain.class.has("Fighter") || p.captain.class.has("Slasher") || p.captain.class.has("Powerhouse")) ? 2 : 1;
        }
    },
    5120: {
        affinity: function(p) { return 1.75; }
    },
    5121: {
        affinity: function(p) { return 1.75; }
    },
    5122: {
        affinity: function(p) { return 1.75; }
    },
    5123: {
        affinity: function(p) { return 1.75; }
    },
    5124: {
        affinity: function(p) { return 1.75; }
    },
    5125: {
        affinity: function(p) { return 1.75; }
    },
    5126: {
        affinity: function(p) { return 1.75; }
    },
    5127: {
        affinity: function(p) { return 1.75; }
    },
    5128: {
        chain: function(p) { return window.specials[5128].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5128].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5128].multiplier == 2.75 ? 1 : 0);
            window.specials[5128].multiplier = [2.75,3.25][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3.25][n] + 'x Chain Lock. To switch to the ' + [3.25, 2.75][n] + 'x multiplier, disable and re-enable this special',
                name: '5128warning'
            });
        },
    },
    5129: {
        chain: function(p) { return window.specials[5129].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5129].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5129].multiplier == 2.75 ? 1 : 0);
            window.specials[5129].multiplier = [2.75,3.25][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3.25][n] + 'x Chain Lock. To switch to the ' + [3.25, 2.75][n] + 'x multiplier, disable and re-enable this special',
                name: '5129warning'
            });
        },
    },
    5130: {
        chain: function(p) { return window.specials[5130].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5130].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5130].multiplier == 2.75 ? 1 : 0);
            window.specials[5130].multiplier = [2.75,3.25][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3.25][n] + 'x Chain Lock. To switch to the ' + [3.25, 2.75][n] + 'x multiplier, disable and re-enable this special',
                name: '5130warning'
            });
        },
    },
    5131: {
        chain: function(p) { return window.specials[5131].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5131].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5131].multiplier == 2.75 ? 1 : 0);
            window.specials[5131].multiplier = [2.75,3.25][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3.25][n] + 'x Chain Lock. To switch to the ' + [3.25, 2.75][n] + 'x multiplier, disable and re-enable this special',
                name: '5131warning'
            });
        },
    },
    5132: {
        chain: function(p) { return window.specials[5132].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5132].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5132].multiplier == 2.75 ? 1 : 0);
            window.specials[5132].multiplier = [2.75,3.25][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3.25][n] + 'x Chain Lock. To switch to the ' + [3.25, 2.75][n] + 'x multiplier, disable and re-enable this special',
                name: '5132warning'
            });
        },
    },
    5133: {
        chain: function(p) { return window.specials[5133].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5133].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5133].multiplier == 2.75 ? 1 : 0);
            window.specials[5133].multiplier = [2.75,3.25][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3.25][n] + 'x Chain Lock. To switch to the ' + [3.25, 2.75][n] + 'x multiplier, disable and re-enable this special',
                name: '5133warning'
            });
        },
    },
    5134: {
        chain: function(p) { return window.specials[5134].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5134].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5134].multiplier == 2.75 ? 1 : 0);
            window.specials[5134].multiplier = [2.75,3.25][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3.25][n] + 'x Chain Lock. To switch to the ' + [3.25, 2.75][n] + 'x multiplier, disable and re-enable this special',
                name: '5134warning'
            });
        },
    },
    5135: {
        chain: function(p) { return window.specials[5135].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5135].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5135].multiplier == 2.75 ? 1 : 0);
            window.specials[5135].multiplier = [2.75,3.25][n];
            p.scope.notify({
                text: 'Using the ' + [2.75, 3.25][n] + 'x Chain Lock. To switch to the ' + [3.25, 2.75][n] + 'x multiplier, disable and re-enable this special',
                name: '5135warning'
            });
        },
    },
    5136: {
        affinity: function(p) { return 3; },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    5137: {
        affinity: function(p) { return 3; },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    5138: {
        affinity: function(p) { return 3; },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    5139: {
        affinity: function(p) { return 3; },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    5140: {
        affinity: function(p) { return 3; },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    5141: {
        affinity: function(p) { return 3; },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    5142: {
        affinity: function(p) { return 3; },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    5143: {
        affinity: function(p) { return 3; },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        }
    },
    5144: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        type: "class"
    },
    5145: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        type: "class"
    },
    5146: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        type: "class"
    },
    5147: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        type: "class"
    },
    5148: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        type: "class"
    },
    5149: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        type: "class"
    },
    5150: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        type: "class"
    },
    5151: {
        atk: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? 2.25 : 1; },
        type: "class"
    },
    5152: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1.75, 1, 1 ][window.specials[5152].multiplier] : 1; },
        type: "class",
        affinity: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1, 1.75, 1 ][window.specials[5152].multiplier] : 1; },
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1, 2.25, 2.25, 2.25, 2.25 ][window.specials[5152].multiplier], [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5152].multiplier == undefined ? 0 : (window.specials[5152].multiplier + 1) % 5);
            window.specials[5152].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK and Affinity Boost', 'ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost'][n] + '. To switch to the ' + ['ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost', 'ATK and Affinity Boost' ][n] + ', disable and re-enable this special',
                name: '5152warning'
            });
        },
    },
    5153: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1.75, 1, 1 ][window.specials[5153].multiplier] : 1; },
        type: "class",
        affinity: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1, 1.75, 1 ][window.specials[5153].multiplier] : 1; },
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1, 2.25, 2.25, 2.25, 2.25 ][window.specials[5153].multiplier], [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5153].multiplier == undefined ? 0 : (window.specials[5153].multiplier + 1) % 5);
            window.specials[5153].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK and Affinity Boost', 'ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost'][n] + '. To switch to the ' + ['ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost', 'ATK and Affinity Boost' ][n] + ', disable and re-enable this special',
                name: '5153warning'
            });
        },
    },
    5154: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1.75, 1, 1 ][window.specials[5154].multiplier] : 1; },
        type: "class",
        affinity: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1, 1.75, 1 ][window.specials[5154].multiplier] : 1; },
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1, 2.25, 2.25, 2.25, 2.25 ][window.specials[5154].multiplier], [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5154].multiplier == undefined ? 0 : (window.specials[5154].multiplier + 1) % 5);
            window.specials[5154].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK and Affinity Boost', 'ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost'][n] + '. To switch to the ' + ['ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost', 'ATK and Affinity Boost' ][n] + ', disable and re-enable this special',
                name: '5154warning'
            });
        },
    },
    5155: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1.75, 1, 1 ][window.specials[5155].multiplier] : 1; },
        type: "class",
        affinity: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1, 1.75, 1 ][window.specials[5155].multiplier] : 1; },
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1, 2.25, 2.25, 2.25, 2.25 ][window.specials[5155].multiplier], [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5155].multiplier == undefined ? 0 : (window.specials[5155].multiplier + 1) % 5);
            window.specials[5155].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK and Affinity Boost', 'ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost'][n] + '. To switch to the ' + ['ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost', 'ATK and Affinity Boost' ][n] + ', disable and re-enable this special',
                name: '5155warning'
            });
        },
    },
    5156: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1.75, 1, 1 ][window.specials[5156].multiplier] : 1; },
        type: "class",
        affinity: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1, 1.75, 1 ][window.specials[5156].multiplier] : 1; },
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1, 2.25, 2.25, 2.25, 2.25 ][window.specials[5156].multiplier], [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5156].multiplier == undefined ? 0 : (window.specials[5156].multiplier + 1) % 5);
            window.specials[5156].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK and Affinity Boost', 'ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost'][n] + '. To switch to the ' + ['ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost', 'ATK and Affinity Boost' ][n] + ', disable and re-enable this special',
                name: '5156warning'
            });
        },
    },
    5157: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1.75, 1, 1 ][window.specials[5157].multiplier] : 1; },
        type: "class",
        affinity: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1, 1.75, 1 ][window.specials[5157].multiplier] : 1; },
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1, 2.25, 2.25, 2.25, 2.25 ][window.specials[5157].multiplier], [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5157].multiplier == undefined ? 0 : (window.specials[5157].multiplier + 1) % 5);
            window.specials[5157].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK and Affinity Boost', 'ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost'][n] + '. To switch to the ' + ['ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost', 'ATK and Affinity Boost' ][n] + ', disable and re-enable this special',
                name: '5157warning'
            });
        },
    },
    5158: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1.75, 1, 1 ][window.specials[5158].multiplier] : 1; },
        type: "class",
        affinity: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1, 1.75, 1 ][window.specials[5158].multiplier] : 1; },
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1, 2.25, 2.25, 2.25, 2.25 ][window.specials[5158].multiplier], [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5158].multiplier == undefined ? 0 : (window.specials[5158].multiplier + 1) % 5);
            window.specials[5158].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK and Affinity Boost', 'ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost'][n] + '. To switch to the ' + ['ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost', 'ATK and Affinity Boost' ][n] + ', disable and re-enable this special',
                name: '5158warning'
            });
        },
    },
    5159: {
        atk: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1.75, 1, 1 ][window.specials[5159].multiplier] : 1; },
        type: "class",
        affinity: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? [ 1.75, 1.75, 1, 1.75, 1 ][window.specials[5159].multiplier] : 1; },
        orb: function(p) { return (p.unit.class.has("Striker") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1, 2.25, 2.25, 2.25, 2.25 ][window.specials[5159].multiplier], [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5159].multiplier == undefined ? 0 : (window.specials[5159].multiplier + 1) % 5);
            window.specials[5159].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['ATK and Affinity Boost', 'ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost'][n] + '. To switch to the ' + ['ATK, Affinity and Orb Boost', 'ATK and Orb Boost', 'Affinity and Orb Boost', 'Orb Boost', 'ATK and Affinity Boost' ][n] + ', disable and re-enable this special',
                name: '5159warning'
            });
        },
    },
    5160: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    5161: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    5162: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    5163: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    5164: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    5165: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    5166: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    5167: {
        affinity: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
    },
    5180: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; },
    },
    5181: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; },
    },
    5182: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; },
    },
    5183: {
        affinity: function(p) { return (p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK") ? 1.75 : 1; },
    },
    5184: {
        atk: function(p) { return [ 1.5, 1.75 ][window.specials[5184].multiplier]; },
        type: "type",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1.5, 1.75 ][window.specials[5184].multiplier], [p.friendCaptain, p.captain], p.effectName); },
        delay: function(p) { return 1; },
        onActivation: function(p) {
            var n = (window.specials[5184].multiplier == 0 ? 1 : 0);
            window.specials[5184].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['1.5x', '1.75x'][n] + ' boosts. To switch to the ' + ['1.75x', '1.5x'][n] + ' boosts, disable and re-enable this special',
                name: '5184warning'
            });
        },
    },
    5185: {
        atk: function(p) { return [ 1.5, 1.75 ][window.specials[5185].multiplier]; },
        type: "type",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1.5, 1.75 ][window.specials[5185].multiplier], [p.friendCaptain, p.captain], p.effectName); },
        delay: function(p) { return 1; },
        onActivation: function(p) {
            var n = (window.specials[5185].multiplier == 0 ? 1 : 0);
            window.specials[5185].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['1.5x', '1.75x'][n] + ' boosts. To switch to the ' + ['1.75x', '1.5x'][n] + ' boosts, disable and re-enable this special',
                name: '5185warning'
            });
        },
    },
    5186: {
        atk: function(p) { return [ 1.5, 1.75 ][window.specials[5186].multiplier]; },
        type: "type",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, [ 1.5, 1.75 ][window.specials[5186].multiplier], [p.friendCaptain, p.captain], p.effectName); },
        delay: function(p) { return 1; },
        onActivation: function(p) {
            var n = (window.specials[5186].multiplier == 0 ? 1 : 0);
            window.specials[5186].multiplier = n;
            p.scope.notify({
                text: 'Using the ' + ['1.5x', '1.75x'][n] + ' boosts. To switch to the ' + ['1.75x', '1.5x'][n] + ' boosts, disable and re-enable this special',
                name: '5186warning'
            });
        },
    },
    5187: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? window.specials[5187].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.PSY + p.colorCount.INT >= 5) {
                window.specials[5187].multiplier = 2;
            }
            else {
                window.specials[5187].multiplier = 1.75;
            }
        },
    },
    5188: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? window.specials[5188].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.PSY + p.colorCount.INT >= 5) {
                window.specials[5188].multiplier = 2;
            }
            else {
                window.specials[5188].multiplier = 1.75;
            }
        },
    },
    5189: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? window.specials[5189].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.PSY + p.colorCount.INT >= 5) {
                window.specials[5189].multiplier = 2;
            }
            else {
                window.specials[5189].multiplier = 1.75;
            }
        },
    },
    5190: {
        atk: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? window.specials[5190].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            if (p.colorCount.PSY + p.colorCount.INT >= 5) {
                window.specials[5190].multiplier = 2;
            }
            else {
                window.specials[5190].multiplier = 1.75;
            }
        },
    },
    5191: {
        orb: function(p) { return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5191].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5191].multiplier == 2 ? 1 : window.specials[5191].multiplier == 2.5 ? 2 : 0);
            window.specials[5191].multiplier = [2, 2.5, 2.75][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.5, 2.75][n] + 'x Orb multiplier. To switch to the ' + [2.5, 2.75, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '5191warning'
            });
        },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    5192: {
        orb: function(p) { return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5192].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5192].multiplier == 2 ? 1 : window.specials[5192].multiplier == 2.5 ? 2 : 0);
            window.specials[5192].multiplier = [2, 2.5, 2.75][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.5, 2.75][n] + 'x Orb multiplier. To switch to the ' + [2.5, 2.75, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '5192warning'
            });
        },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    5193: {
        orb: function(p) { return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5193].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5193].multiplier == 2 ? 1 : window.specials[5193].multiplier == 2.5 ? 2 : 0);
            window.specials[5193].multiplier = [2, 2.5, 2.75][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.5, 2.75][n] + 'x Orb multiplier. To switch to the ' + [2.5, 2.75, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '5193warning'
            });
        },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    5194: {
        orb: function(p) { return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5194].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5194].multiplier == 2 ? 1 : window.specials[5194].multiplier == 2.5 ? 2 : 0);
            window.specials[5194].multiplier = [2, 2.5, 2.75][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.5, 2.75][n] + 'x Orb multiplier. To switch to the ' + [2.5, 2.75, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '5194warning'
            });
        },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    5195: {
        orb: function(p) { return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5195].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5195].multiplier == 2 ? 1 : window.specials[5195].multiplier == 2.5 ? 2 : 0);
            window.specials[5195].multiplier = [2, 2.5, 2.75][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.5, 2.75][n] + 'x Orb multiplier. To switch to the ' + [2.5, 2.75, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '5195warning'
            });
        },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    5196: {
        orb: function(p) { return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5196].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5196].multiplier == 2 ? 1 : window.specials[5196].multiplier == 2.5 ? 2 : 0);
            window.specials[5196].multiplier = [2, 2.5, 2.75][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.5, 2.75][n] + 'x Orb multiplier. To switch to the ' + [2.5, 2.75, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '5196warning'
            });
        },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    5197: {
        orb: function(p) { return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5197].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5197].multiplier == 2 ? 1 : window.specials[5197].multiplier == 2.5 ? 2 : 0);
            window.specials[5197].multiplier = [2, 2.5, 2.75][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.5, 2.75][n] + 'x Orb multiplier. To switch to the ' + [2.5, 2.75, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '5197warning'
            });
        },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    5198: {
        orb: function(p) { return (p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5198].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5198].multiplier == 2 ? 1 : window.specials[5198].multiplier == 2.5 ? 2 : 0);
            window.specials[5198].multiplier = [2, 2.5, 2.75][n];
            p.scope.notify({
                text: 'Using the ' + [2, 2.5, 2.75][n] + 'x Orb multiplier. To switch to the ' + [2.5, 2.75, 2][n] + 'x multiplier, disable and re-enable this special',
                name: '5198warning'
            });
        },
        chain: function(p) { return 3; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3 : 1;
        },
    },
    5199: {
        atk: function(p) { return p.unit.type == "STR" ? 2.75 : 1; },
        type: "type",
    },
    5200: {
        atk: function(p) { return p.unit.type == "STR" ? 2.75 : 1; },
        type: "type",
    },
    5201: {
        atk: function(p) { return p.unit.type == "STR" ? 2.75 : 1; },
        type: "type",
    },
    5202: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5203: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5204: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5205: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5206: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5207: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5208: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5209: {
        orb: function(p) { return (p.unit.type == "DEX" || p.unit.type == "INT") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.5, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
    },
    5210: {
        chain: function(p) { return window.specials[5210].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5210].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5210].multiplier == 3 ? 1 : window.specials[5210].multiplier == 3.25 ? 2 : 0);
            window.specials[5210].multiplier = [3, 3.25, 3.5][n];
            p.scope.notify({
                text: 'Using the ' + [3, 3.25, 3.5][n] + 'x Chain Lock. To switch to the ' + [3.25, 3.5, 3][n] + 'x multiplier, disable and re-enable this special',
                name: '5210warning'
            });
        },
    },
    5211: {
        chain: function(p) { return window.specials[5211].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5211].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5211].multiplier == 3 ? 1 : window.specials[5211].multiplier == 3.25 ? 2 : 0);
            window.specials[5211].multiplier = [3, 3.25, 3.5][n];
            p.scope.notify({
                text: 'Using the ' + [3, 3.25, 3.5][n] + 'x Chain Lock. To switch to the ' + [3.25, 3.5, 3][n] + 'x multiplier, disable and re-enable this special',
                name: '5211warning'
            });
        },
    },
    5212: {
        chain: function(p) { return window.specials[5212].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5212].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5212].multiplier == 3 ? 1 : window.specials[5212].multiplier == 3.25 ? 2 : 0);
            window.specials[5212].multiplier = [3, 3.25, 3.5][n];
            p.scope.notify({
                text: 'Using the ' + [3, 3.25, 3.5][n] + 'x Chain Lock. To switch to the ' + [3.25, 3.5, 3][n] + 'x multiplier, disable and re-enable this special',
                name: '5212warning'
            });
        },
    },
    5213: {
        chain: function(p) { return window.specials[5213].multiplier; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? window.specials[5213].multiplier : 1;
        },
        onActivation: function(p) {
            var n = (window.specials[5213].multiplier == 3 ? 1 : window.specials[5213].multiplier == 3.25 ? 2 : 0);
            window.specials[5213].multiplier = [3, 3.25, 3.5][n];
            p.scope.notify({
                text: 'Using the ' + [3, 3.25, 3.5][n] + 'x Chain Lock. To switch to the ' + [3.25, 3.5, 3][n] + 'x multiplier, disable and re-enable this special',
                name: '5213warning'
            });
        },
    },
    5214: {
        atk: function(p) { return window.specials[5214].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 30 ? 2 : 2.5);
            window.specials[5214].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 30%, using the ' + n + 'x multiplier.',
                name: '5214warning'
            });
        }
    },
    5215: {
        atk: function(p) { return window.specials[5215].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 30 ? 2 : 2.5);
            window.specials[5215].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 30%, using the ' + n + 'x multiplier.',
                name: '5215warning'
            });
        }
    },
    5216: {
        atk: function(p) { return window.specials[5216].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 30 ? 2 : 2.5);
            window.specials[5216].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 30%, using the ' + n + 'x multiplier.',
                name: '5216warning'
            });
        }
    },
    5217: {
        atk: function(p) { return window.specials[5217].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 30 ? 2 : 2.5);
            window.specials[5217].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 30%, using the ' + n + 'x multiplier.',
                name: '5217warning'
            });
        }
    },
    5218: {
        atk: function(p) { return window.specials[5218].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 30 ? 2 : 2.5);
            window.specials[5218].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 30%, using the ' + n + 'x multiplier.',
                name: '5218warning'
            });
        }
    },
    5219: {
        atk: function(p) { return window.specials[5219].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 30 ? 2 : 2.5);
            window.specials[5219].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'above' : 'below') + ' 30%, using the ' + n + 'x multiplier.',
                name: '5219warning'
            });
        }
    },
    5220: {
        chain: function(p) { return 3.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.5 : 1;
        }
    },
    5221: {
        chain: function(p) { return 3.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.5 : 1;
        }
    },
    5222: {
        chain: function(p) { return 3.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.5 : 1;
        }
    },
    5223: {
        chain: function(p) { return 3.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.5 : 1;
        }
    },
    5224: {
        chain: function(p) { return 3.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.5 : 1;
        }
    },
    5225: {
        chain: function(p) { return 3.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.5 : 1;
        }
    },
    5226: {
        chain: function(p) { return 3.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.5 : 1;
        }
    },
    5227: {
        chain: function(p) { return 3.5; },
        chainLimiter: function(p) {
            var prev = p.hitcombo[p.hitcombo.length - 1][p.chainPosition - 1]
            return p.chainPosition === 0 ? 1 : (prev == 'Good'  || prev == 'Great' || prev == 'Perfect') ? 3.5 : 1;
        }
    },
    5228: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    5229: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    5230: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    5231: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    5232: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    5233: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    5234: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    5235: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName); },
        warning: "Selected special (%name%) assumes that the enemy has Delay Protection."
    },
    5236: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    5237: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    5238: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    5239: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    5240: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    5241: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    5242: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    5243: {
        atk: function(p) { return p.delayed > 0 ? 1.75 : 1; },
        type: "condition",
    },
    5244: {
        delay: function(p) { return 2; },
    },
    5245: {
        delay: function(p) { return 2; },
    },
    5246: {
        delay: function(p) { return 2; },
    },
    5247: {
        atk: function(p) { return 2; },
        type: "condition",
    },
    5248: {
        atk: function(p) { return 2; },
        type: "condition",
    },
    5249: {
        atk: function(p) { return 2; },
        type: "condition",
    },
    5250: {
        atk: function(p) { return 2; },
        type: "condition",
    },
    5251: {
        atk: function(p) { return 2; },
        type: "condition",
    },
    5252: {
        atk: function(p) { return 2; },
        type: "condition",
    },
    5253: {
        atk: function(p) { return 2; },
        type: "condition",
    },
    5254: {
        atk: function(p) { return 2; },
        type: "condition",
    },
    5259:{
        affinity: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 2.25 : 1; },
    },
    5260:{
        affinity: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 2.25 : 1; },
    },
    5261:{
        affinity: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 2.25 : 1; },
    },
    5262:{
        affinity: function(p) { return (p.unit.type == "PSY" || p.unit.type == "INT") ? 2.25 : 1; },
    },
    5263: {
        orb: function(p) { return (p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5264: {
        orb: function(p) { return (p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5265: {
        orb: function(p) { return (p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5266: {
        orb: function(p) { return (p.unit.class.has('Fighter') || p.unit.class.has('Free Spirit')) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5267: {
        atk: function(p) { return window.specials[5267].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.5 : 2);
            window.specials[5267].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.5 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5267warning'
            });
        }
    },
    5268: {
        atk: function(p) { return window.specials[5268].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.5 : 2);
            window.specials[5268].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.5 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5268warning'
            });
        }
    },
    5269: {
        atk: function(p) { return window.specials[5269].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.5 : 2);
            window.specials[5269].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.5 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5269warning'
            });
        }
    },
    5270: {
        atk: function(p) { return window.specials[5270].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.5 : 2);
            window.specials[5270].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.5 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5270warning'
            });
        }
    },
    5271: {
        atk: function(p) { return window.specials[5271].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.5 : 2);
            window.specials[5271].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.5 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5271warning'
            });
        }
    },
    5272: {
        atk: function(p) { return window.specials[5272].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.5 : 2);
            window.specials[5272].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.5 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5272warning'
            });
        }
    },
    5273: {
        atk: function(p) { return window.specials[5273].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.5 : 2);
            window.specials[5273].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.5 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5273warning'
            });
        }
    },
    5274: {
        atk: function(p) { return window.specials[5274].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP >= 99 ? 2.5 : 2);
            window.specials[5274].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2.5 ? 'above' : 'below') + ' 99%, using the ' + n + 'x multiplier.',
                name: '5274warning'
            });
        }
    },
    5275: {
        orb: function(p) { return (p.captain.class.has("Slasher") || p.captain.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5275].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[5275].multiplier = (p.captain.type == "STR" || p.captain.type == "PSY") ? 2.75 : 2;
        }
    },
    5276: {
        orb: function(p) { return (p.captain.class.has("Slasher") || p.captain.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5276].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[5276].multiplier = (p.captain.type == "STR" || p.captain.type == "PSY") ? 2.75 : 2;
        }
    },
    5277: {
        orb: function(p) { return (p.captain.class.has("Slasher") || p.captain.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5277].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[5277].multiplier = (p.captain.type == "STR" || p.captain.type == "PSY") ? 2.75 : 2;
        }
    },
    5278: {
        orb: function(p) { return (p.captain.class.has("Slasher") || p.captain.class.has("Driven")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5278].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            window.specials[5278].multiplier = (p.captain.type == "STR" || p.captain.type == "PSY") ? 2.75 : 2;
        }
    },
    5279: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? window.specials[5279].multiplier == 2.25 ? window.specials[5279].multiplier : 1 : 1; },
        type: "type",
        orb: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? window.specials[5279].multiplier == 2.5 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5279].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5279].multiplier == 2.25 ? 1 : 0);
            window.specials[5279].multiplier = [2.25, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + ["ATK Boost", "Orb Boost"][n] + '. To switch to the ' + ["Orb Boost", "ATK Boost"][n] + ', disable and re-enable this special',
                name: '5279warning'
            });
        },
    },
    5280: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "INT" ? window.specials[5280].multiplier == 2.25 ? window.specials[5280].multiplier : 1 : 1; },
        type: "type",
        orb: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "INT" ? window.specials[5280].multiplier == 2.5 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5280].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5280].multiplier == 2.25 ? 1 : 0);
            window.specials[5280].multiplier = [2.25, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + ["ATK Boost", "Orb Boost"][n] + '. To switch to the ' + ["Orb Boost", "ATK Boost"][n] + ', disable and re-enable this special',
                name: '5280warning'
            });
        },
    },
    5281: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? window.specials[5281].multiplier == 2.25 ? window.specials[5281].multiplier : 1 : 1; },
        type: "type",
        orb: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "INT" ? window.specials[5281].multiplier == 2.5 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5281].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5281].multiplier == 2.25 ? 1 : 0);
            window.specials[5281].multiplier = [2.25, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + ["ATK Boost", "Orb Boost"][n] + '. To switch to the ' + ["Orb Boost", "ATK Boost"][n] + ', disable and re-enable this special',
                name: '5281warning'
            });
        },
    },
    5282: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "INT" ? window.specials[5282].multiplier == 2.25 ? window.specials[5282].multiplier : 1 : 1; },
        type: "type",
        orb: function(p) { return p.unit.type == "STR" || p.unit.type == "PSY" || p.unit.type == "INT" ? window.specials[5282].multiplier == 2.5 ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[5282].multiplier, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); },
        onActivation: function(p) {
            var n = (window.specials[5282].multiplier == 2.25 ? 1 : 0);
            window.specials[5282].multiplier = [2.25, 2.5][n];
            p.scope.notify({
                text: 'Using the ' + ["ATK Boost", "Orb Boost"][n] + '. To switch to the ' + ["Orb Boost", "ATK Boost"][n] + ', disable and re-enable this special',
                name: '5282warning'
            });
        },
    },
    5283: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5284: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5285: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5286: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5287: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5288: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5289: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5290: {
        atk: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? 2 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Striker") || p.unit.class.has("Cerebral") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2, [p.friendCaptain, p.captain], p.effectName) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1, [p.friendCaptain, p.captain], p.effectName); }	
    },
    5291: {
        chainAddition: function(p) { return 1.2; }
    },
    5292: {
        chainAddition: function(p) { return 1.2; }
    },
    5293: {
        chainAddition: function(p) { return 1.2; }
    },
    5294: {
        chainAddition: function(p) { return 1.2; }
    },
    5295: {
        chainAddition: function(p) { return 1.2; }
    },
    5296: {
        chainAddition: function(p) { return 1.2; }
    },
    5297: {
        chainAddition: function(p) { return 1.2; }
    },
    5298: {
        chainAddition: function(p) { return 1.2; }
    },
    5299: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    5300: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    5301: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    5302: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    5303: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    5304: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    5305: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
    5306: {
        affinity: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Cerebral") ? 2.25 : 1; },
    },
};