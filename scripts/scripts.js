var SCROLLER_LENGTH = 60;
var HEIGHT = 7;
var fps = 30;
//Text
var myMessage = textToLED("Example !HEART");
var leftPointer = SCROLLER_LENGTH + 1;
var rightPointer = 0;
var furthestLeftPoint = 0 - myMessage.length;

function changeText(text) {
    clearLights();
    myMessage = textToLED(text);
    furthestLeftPoint = 0 - myMessage.length;
    leftPointer = SCROLLER_LENGTH + 1;
}

function clearLights() {
    var lightsOn = $('.on');
    lightsOn.removeClass('on');
    lightsOn.addClass('off');
}

function setLight(row, col, state) {
    var theLight = $('.' + row + '_' + col);

    if (theLight.hasClass('on') && !state) {
        theLight.removeClass('on');
        theLight.addClass('off');
    } else if (theLight.hasClass('off') && state) {
        theLight.removeClass('off');
        theLight.addClass('on');
    }
}

function drawMessage(messageArray, leftPointer) {
    var messageLength = messageArray.length;
    var totalScrollLength = SCROLLER_LENGTH + messageLength;

    if (messageLength > 0) {
        for (var col = 0; col < messageLength; col++) {
            for (var row = 0; row < HEIGHT; row++) {
                var offsetCol = leftPointer + col;

                if (offsetCol < SCROLLER_LENGTH || offsetCol >= 0) {
                    setLight(row, offsetCol, messageArray[col][row]);
                }
            }
        }

    }
}

function textToLED(theWord) {
    var theMessage = [];
    theWord = (theWord + ' ').toUpperCase();
    for (var i = 0; i < theWord.length; i++) {
        if (theWord.charAt(i) == '!') {
            var specialcode = "";
            while (theWord.charAt(++i) != ' ') {
                specialcode += theWord.charAt(i);
            }
            theMessage.push(charToLED('!', specialcode));
            theMessage.push(charToLED());
        } else {
            theMessage.push(charToLED());
            theMessage.push(charToLED(theWord.charAt(i)));
        }
    }

    var flatten = [];
    flatten = flatten.concat.apply(flatten, theMessage);

    return flatten;
}

function charToLED(theChar, special) {
    var theLed = [];
    switch (theChar) {
        case 'A':
            theLed = [[false, false, true, true, true, true, true],
            [false, true, false, false, true, false, false],
            [true, false, false, false, true, false, false],
            [false, true, false, false, true, false, false],
            [false, false, true, true, true, true, true]];
            break;
        case 'B':
            theLed = [[true, true, true, true, true, true, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [false, true, true, false, true, true, false]];
            break;
        case 'C':
            theLed = [[false, true, true, true, true, true, false],
            [true, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [false, true, false, false, false, true, false]];
            break;
        case 'D':
            theLed = [[true, true, true, true, true, true, true],
            [true, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [false, true, true, true, true, true, false]];
            break;
        case 'E':
            theLed = [[true, true, true, true, true, true, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, false, false, false, true]];
            break;
        case 'F':
            theLed = [[true, true, true, true, true, true, true],
            [true, false, false, true, false, false, false],
            [true, false, false, true, false, false, false],
            [true, false, false, true, false, false, false],
            [true, false, false, false, false, false, false]];
            break;
        case 'G':
            theLed = [[false, true, true, true, true, true, false],
            [true, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [true, false, false, false, true, false, true],
            [true, true, false, false, true, true, true]];
            break;
        case 'H':
            theLed = [[true, true, true, true, true, true, true],
            [false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false],
            [true, true, true, true, true, true, true]];
            break;
        case 'I':
            theLed = [[true, false, false, false, false, false, true],
            [true, true, true, true, true, true, true],
            [true, false, false, false, false, false, true],];
            break;
        case 'J':
            theLed = [[false, false, false, false, false, true, false],
            [false, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [true, true, true, true, true, true, false],
            [true, false, false, false, false, false, false]];
            break;
        case 'K':
            theLed = [[true, true, true, true, true, true, true],
            [false, false, false, true, false, false, false],
            [false, false, true, false, true, false, false],
            [false, true, false, false, false, true, false],
            [true, false, false, false, false, false, true]];
            break;
        case 'L':
            theLed = [[true, true, true, true, true, true, true],
            [false, false, false, false, false, false, true],
            [false, false, false, false, false, false, true],
            [false, false, false, false, false, false, true]];
            break;
        case 'M':
            theLed = [[true, true, true, true, true, true, true],
            [false, true, false, false, false, false, false],
            [false, false, true, false, false, false, false],
            [false, true, false, false, false, false, false],
            [true, true, true, true, true, true, true]];
            break;
        case 'N':
            theLed = [[true, true, true, true, true, true, true],
            [false, false, true, false, false, false, false],
            [false, false, false, true, false, false, false],
            [false, false, false, false, true, false, false],
            [true, true, true, true, true, true, true]];
            break;
        case 'O':
            theLed = [[false, true, true, true, true, true, false],
            [true, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [false, true, true, true, true, true, false]];
            break;
        case 'P':
            theLed = [[true, true, true, true, true, true, true],
            [true, false, false, true, false, false, false],
            [true, false, false, true, false, false, false],
            [true, false, false, true, false, false, false],
            [false, true, true, false, false, false, false]];
            break;
        case 'Q':
            theLed = [[false, true, true, true, true, true, false],
            [true, false, false, false, false, false, true],
            [true, false, false, false, true, false, true],
            [true, false, false, false, false, true, false],
            [false, true, true, true, true, false, true]];
            break;
        case 'R':
            theLed = [[true, true, true, true, true, true, true],
            [true, false, false, true, false, false, false],
            [true, false, false, true, false, false, false],
            [true, false, false, true, false, false, false],
            [false, true, true, false, true, true, true]];
            break;
        case 'S':
            theLed = [[false, true, true, false, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, false, true, true, false]];
            break;
        case 'T':
            theLed = [[true, false, false, false, false, false, false],
            [true, false, false, false, false, false, false],
            [true, true, true, true, true, true, true],
            [true, false, false, false, false, false, false],
            [true, false, false, false, false, false, false]];
            break;
        case 'U':
            theLed = [[true, true, true, true, true, true, false],
            [false, false, false, false, false, false, true],
            [false, false, false, false, false, false, true],
            [false, false, false, false, false, false, true],
            [true, true, true, true, true, true, false]];
            break;
        case 'V':
            theLed = [[true, true, true, true, true, false, false],
            [false, false, false, false, false, true, false],
            [false, false, false, false, false, false, true],
            [false, false, false, false, false, true, false],
            [true, true, true, true, true, false, false]];
            break;
        case 'W':
            theLed = [[true, true, true, true, true, true, false],
            [false, false, false, false, false, false, true],
            [false, false, false, false, true, true, false],
            [false, false, false, false, false, false, true],
            [true, true, true, true, true, true, false]];
            break;
        case 'X':
            theLed = [[true, true, false, false, false, true, true],
            [false, false, true, false, true, false, false],
            [false, false, false, true, false, false, false],
            [false, false, true, false, true, false, false],
            [true, true, false, false, false, true, true]];
            break;
        case 'Y':
            theLed = [[true, true, false, false, false, false, false],
            [false, false, true, false, false, false, false],
            [false, false, false, true, true, true, true],
            [false, false, true, false, false, false, false],
            [true, true, false, false, false, false, false]];
            break;
        case 'Z':
            theLed = [[true, false, false, false, false, true, true],
            [true, false, false, false, true, false, true],
            [true, false, false, true, false, false, true],
            [true, false, true, false, false, false, true],
            [true, true, false, false, false, false, true]];
            break;
        case '1':
            theLed = [[false, false, false, false, false, false, false],
            [false, true, false, false, false, false, true],
            [true, true, true, true, true, true, true],
            [false, false, false, false, false, false, true],
            [false, false, false, false, false, false, false]];
            break;
        case '2':
            theLed = [[false, true, false, false, false, false, true],
            [true, false, false, false, false, true, true],
            [true, false, false, false, true, false, true],
            [true, false, false, true, false, false, true],
            [false, true, true, false, false, false, true]];
            break;
        case '3':
            theLed = [[false, true, false, false, false, true, false],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [false, true, true, false, true, true, false]];
            break;
        case '4':
            theLed = [[false, false, false, true, true, false, false],
            [false, false, true, false, true, false, false],
            [false, true, false, false, true, false, false],
            [true, true, true, true, true, true, true],
            [false, false, false, false, true, false, false]];
            break;
        case '5':
            theLed = [[true, true, true, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, false, true, true, false]];
            break;
        case '6':
            theLed = [[false, true, true, true, true, true, false],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [false, false, false, false, true, true, false]];
            break;
        case '7':
            theLed = [[true, false, false, false, false, false, false],
            [true, false, false, false, false, false, false],
            [true, false, false, true, true, true, true],
            [true, false, true, false, false, false, false],
            [true, true, false, false, false, false, false]];
            break;
        case '8':
            theLed = [[false, true, true, false, true, true, false],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [false, true, true, false, true, true, false]];
            break;
        case '9':
            theLed = [[false, true, true, false, false, false, false],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [true, false, false, true, false, false, true],
            [false, true, true, true, true, true, false]];
            break;
        case '0':
            theLed = [[false, true, true, true, true, true, false],
            [true, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [true, false, false, false, false, false, true],
            [false, true, true, true, true, true, false]];
            break;
        case '?':
            theLed = [[false, true, false, false, false, false, false],
            [true, false, false, false, false, false, false],
            [true, false, false, false, true, false, true],
            [true, false, false, true, false, false, false],
            [false, true, true, false, false, false, false]];
            break;
        case '.':
            theLed = [[false, false, false, false, false, false, false],
            [false, false, false, false, false, false, true],
            [false, false, false, false, false, false, false]];
            break;
        case '$':
            theLed = [[false, true, true, false, false, true, false],
            [true, false, false, true, false, false, true],
            [true, true, true, true, true, true, true],
            [true, false, false, true, false, false, true],
            [false, true, false, false, true, true, false]];
            break;
        case '€':
            theLed = [[false, false, true, false, true, false, false],
            [false, true, true, true, true, true, false],
            [true, false, true, false, true, false, true],
            [true, false, true, false, true, false, true],
            [true, false, true, false, true, false, true]];
            break;
        case '=':
            theLed = [[false, false, true, false, true, false, false],
            [false, false, true, false, true, false, false],
            [false, false, true, false, true, false, false],
            [false, false, true, false, true, false, false],
            [false, false, true, false, true, false, false]];
            break;
        case '+':
            theLed = [[false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false],
            [false, true, true, true, true, true, false],
            [false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false]];
            break;
        case '-':
            theLed = [[false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false],
            [false, false, false, true, false, false, false]];
            break;
        case '%':
            theLed = [[false, false, false, false, false, true, false],
            [false, true, false, false, true, false, false],
            [false, false, false, true, false, false, false],
            [false, false, true, false, false, true, false],
            [false, true, false, false, false, false, false]];
            break;
        case '/':
            theLed = [[false, false, false, false, false, true, false],
            [false, false, false, false, true, false, false],
            [false, false, false, true, false, false, false],
            [false, false, true, false, false, false, false],
            [false, true, false, false, false, false, false]];
            break;
        case '*':
            theLed = [[false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [true, false, true, false, false, false, false],
            [false, true, false, false, false, false, false],
            [true, false, true, false, false, false, false]];
            break;
        case '|':
            theLed = [[false, false, false, false, false, false, false],
            [true, true, true, true, true, true, true],
            [false, false, false, false, false, false, false]];
            break;
        case '!':
            switch (special) {
                case "FULL":
                    theLed = [[true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true],
                    [true, true, true, true, true, true, true]];
                    break;
                case "HEART":
                    theLed = [[false, true, true, true, false, false, false],
                    [true, false, false, false, true, false, false],
                    [true, false, false, false, false, true, false],
                    [false, true, false, false, false, false, true],
                    [true, false, false, false, false, true, false],
                    [true, false, false, false, true, false, false],
                    [false, true, true, true, false, false, false]];
                    break;
                case "SMILE":
                    theLed = [[false, false, false, false, false, true, false],
                    [false, true, false, false, false, false, true],
                    [false, false, false, false, false, false, true],
                    [false, true, false, false, false, false, true],
                    [false, false, false, false, false, true, false]];
                    break;
                case "HOUSE":
                    theLed = [[true, true, true, true, true, true, true],
                    [false, true, false, false, false, false, true],
                    [true, false, false, false, true, true, true],
                    [false, true, false, false, false, false, true],
                    [false, false, true, true, true, true, true]];
                    break;
                case "SAD":
                    theLed = [[false, false, false, false, false, true, false],
                    [false, true, false, false, true, false, false],
                    [false, false, false, false, true, false, false],
                    [false, true, false, false, true, false, false],
                    [false, false, false, false, false, true, false]];
                    break;
                case "KING":
                    theLed = [[true, true, true, true, true, true, true],
                    [false, true, false, false, false, false, true],
                    [false, false, true, false, false, false, true],
                    [false, true, false, false, false, false, true],
                    [true, false, false, false, false, false, true],
                    [false, true, false, false, false, false, true],
                    [false, false, true, false, false, false, true],
                    [false, true, false, false, false, false, true],
                    [true, true, true, true, true, true, true]];
                    break;
                default:
                    exclamation = [[true, true, true, true, true, false, true]];

                    theLed = exclamation;
                    if (special !== undefined) {
                        array = special.split('!');

                        for (var i = 0; i < array.length; i++) {
                            if (i == (array.length) - 1 && array.length > 1) {
                                theLed = theLed.concat(exclamation);
                            }
                            theLed = theLed.concat(textToLED(array[i]));
                        }
                    }
                    break;
            }
            break;
        default:
            theLed = [[false, false, false, false, false, false, false]];

    }
    return theLed;
}


function draw() {
    setTimeout(function () {
        requestAnimationFrame(draw);

        if (leftPointer == furthestLeftPoint) {
            leftPointer = SCROLLER_LENGTH + 1;
        }
        drawMessage(myMessage, leftPointer);
        leftPointer--;
    }, 1000 / fps);
}

function createLEDs() {
    var container = document.getElementById('theMarquee');
    for (var i = 0; i <= 6; i++) {
        for (var j = 0; j < 60; j++) {
            var node = document.createElement("DIV");
            node.classList.add("light");
            node.classList.add("off");
            node.classList.add(`${i + "_" + j}`);
            container.append(node);
        }
    }

}
createLEDs();
draw();

//Stream Elements

let eventsLimit = 5,
    userLocale = "en-US",
    includeFollowers = true,
    includeRedemptions = true,
    includeHosts = true,
    minHost = 0,
    includeRaids = true,
    minRaid = 0,
    includeSubs = true,
    includeTips = true,
    minTip = 0,
    includeCheers = true,
    direction = "top",
    textOrder = "nameFirst",
    minCheer = 0;

let userCurrency,
    totalEvents = 0;

window.addEventListener('onEventReceived', function (obj) {
    if (!obj.detail.event) {
        return;
    }
    if (typeof obj.detail.event.itemId !== "undefined") {
        obj.detail.listener = "redemption-latest"
    }
    const listener = obj.detail.listener.split("-")[0];
    const event = obj.detail.event;

    if (listener === 'follower') {
        if (includeFollowers) {
            // addEvent('follower', 'Follower', event.name);
        }
    } else if (listener === 'redemption') {
        if (includeRedemptions) {
            // addEvent('redemption', 'Redeemed', event.name);
        }
    } else if (listener === 'subscriber') {
        changeText(event.message);
        if (includeSubs) {
            if (event.gifted) {
                // addEvent('sub', `Sub gift`, event.name);
            } else {
                // addEvent('sub', `Sub X${event.amount}`, event.name);
            }
        }
    } else if (listener === 'host') {
        if (includeHosts && minHost <= event.amount) {
            // addEvent('host', `Host ${event.amount.toLocaleString()}`, event.name);
        }
    } else if (listener === 'cheer') {
        if (includeCheers && minCheer <= event.amount) {
            // addEvent('cheer', `${event.amount.toLocaleString()} Bits`, event.name);
        }
    } else if (listener === 'tip') {
        if (includeTips && minTip <= event.amount) {

            changeText(event.message);

            if (event.amount === parseInt(event.amount)) {
                // addEvent('tip', event.amount.toLocaleString(userLocale, {
                //     style: 'currency',
                //     minimumFractionDigits: 0,
                //     currency: userCurrency.code
                // }), event.name);
            } else {
                // addEvent('tip', event.amount.toLocaleString(userLocale, {
                //     style: 'currency',
                //     currency: userCurrency.code
                // }), event.name);
            }
        }
    } else if (listener === 'raid') {
        if (includeRaids && minRaid <= event.amount) {
            // addEvent('raid', `Raid ${event.amount.toLocaleString()}`, event.name);
        }
    }
});

