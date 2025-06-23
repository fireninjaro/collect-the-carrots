namespace SpriteKind {
    export const Transportation = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
info.onScore(60, function () {
    game.showLongText("Level two: get to the plane before the soldier gets you or the time finishes", DialogLayout.Full)
    mySprite3 = sprites.create(img`
        ....ffffff.........ccc..........
        ....ff22ccf.......cc4f..........
        .....ffccccfff...cc44f..........
        ....cc24442222cccc442f..........
        ...c9b4422222222cc422f..........
        ..c999b2222222222222fc..........
        .c2b99111b222222222c22c.........
        c222b111992222ccccccc22f........
        f222222222222c222ccfffff........
        .f2222222222442222f.............
        ..ff2222222cf442222f............
        ....ffffffffff442222c...........
        .........f2cfffc2222c...........
        .........fcc2ffffffff...........
        ..........fc2ffff...............
        ...........fffff................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Transportation)
    mySprite3.setPosition(22, 90)
    info.startCountdown(13)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
    sprites.destroy(mySprite3, effects.rings, 500)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
info.onScore(80, function () {
    game.gameOver(true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Transportation, function (sprite, otherSprite) {
    sprites.destroy(mySprite2)
    sprites.destroy(mySprite5)
    sprites.destroy(mySprite6)
    mySprite7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f c c c c c c c c c c f . . 
        . . f c a a a a a a a a c f . . 
        . . f c a 6 6 6 6 6 6 a c f . . 
        . . f c a a a a a a a a c f . . 
        . . f c c c c c c c c c c f . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite.setPosition(15, 15)
    info.stopCountdown()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(20)
    mySprite5.x += -70
    mySprite6.x += 70
    mySprite2.x += -70
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.spray, 500)
    info.changeLifeBy(-1)
})
let mySprite7: Sprite = null
let mySprite3: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................
    ........................
    ...........cc...........
    ...........cccc.........
    .......cc...ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    .....ccb55555555ff55d55c
    ......b5555555555555555c
    ...c..b555d55555bb13bbc.
    ...cccd55ddddd55bb3335c.
    ....cbdddddddddd55b335c.
    ..cccdddddb55bdddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddddcb55cbcc....
    cddddddddd55dbccbbc.....
    cbdddddddd555dbbbcc.....
    .ccbdddbbdd555bbcdbcc...
    ...cccbbbbdd55ccdddbc...
    ......cccbdddbccccccc...
    ........cdd555dc........
    `, SpriteKind.Player)
mySprite.setPosition(22, 22)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . 7 . . 7 . . 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . . . . 4 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(135, 55)
let mySprite4 = sprites.create(img`
    .......ff...............
    ....ffff2ff.............
    ..ffeeeef2ff............
    .ffeeeeef22ff...........
    .feeeeffeeeef...........
    .fffffee2222ef..........
    fffe222ffffe2f..........
    ffffffffeeefff..........
    fefe44ebf44eef..........
    .fee4d4bfddef...........
    ..feee4dddee.c..........
    ...f2222eeddecccccccccc.
    ...f444e44ddecddddddddc.
    ...fffffeeee.ccccccccc..
    ..ffffffff...c..........
    ..fff..ff...............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite4.setPosition(130, 95)
mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . 7 . . 7 . . 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . . . . 4 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . 7 . . 7 . . 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . . . . 4 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite6.setPosition(17, 96)
mySprite5.setPosition(137, 22)
mySprite4.setBounceOnWall(true)
mySprite4.setVelocity(100, 100)
info.setLife(1)
mySprite.setStayInScreen(true)
game.setGameOverMessage(false, "Slayed")
