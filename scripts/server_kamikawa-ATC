importPackage(Packages.jp.ngt.rtm);
importPackage(Packages.jp.ngt.rtm.entity.train);
importPackage(Packages.jp.ngt.rtm.entity.train.util);

function onUpdate(entity, scriptExecter) {
    kamikawa_ATC(entity);
}

function kamikawa_ATC (entity) {

    var signal = entity.getSignal();
    var speed = Math.abs(entity.getSpeed() * 72);
    var limit = (signal - 1) * 5;

    if (signal != 0) {
        if (speed > limit) {
            if (speed > limit + 11) entity.setNotch(-7);
            if (speed > limit + 5 && speed < limit + 7) entity.setNotch(-4);
            if (speed > limit + 1 && speed < limit + 3) entity.setNotch(-2);
            if (speed > limit - 0 && speed < limit + 0.5) entity.setNotch(0);
        }
    }
}
