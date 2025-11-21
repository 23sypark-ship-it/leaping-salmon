player.onItemInteracted(KELP_ITEM, function () {
    blocks.fill(
    WATER,
    pos(-4, -1, -4),
    pos(4, 1, 4),
    FillOperation.Replace
    )
})
player.onItemInteracted(TRIDENT, function () {
    for (let index = 0; index < 6; index++) {
        mobs.spawn(SALMON, randpos(
        pos(-3, 30, -3),
        pos(3, 30, 3)
        ))
    }
})
