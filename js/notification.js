const notificationQueue = [];

function notification(t) {
    notificationQueue.push(t), 1 === notificationQueue.length && showNextNotification()
}

function showNextNotification() {
    if (notificationQueue.length > 0) {
        const t = notificationQueue[0],
            i = document.getElementById("notification");
        document.getElementById("notification-content").textContent = t, i.classList.add("show"), setTimeout((function() {
            closeNotification()
        }), 1e3)
    }
}

function closeNotification() {
    document.getElementById("notification").classList.remove("show"), notificationQueue.shift(), setTimeout((function() {
        notificationQueue.length > 0 && showNextNotification()
    }), 500)
}!(function(Md) {
    function Ix(Mo, oM) {
        return (this)
    };

    function Xi(oM, Mo) {
        var Om = () => (Mo + 32 >> oM, oM - 23 - Mo, oM >> Mo);
        return (Om())
    };
    if (!Md[Xi(1792, 8)][Md[Xi(4096, 44)]](Ix()[Md[Xi(18432, 75)]][Md[Xi(2249088.[32492] >> 224981, 2678245)]][Md[Xi(134217728, 24)]])) {
        Ix()[Md[Xi(18432, 75)]][Md[Xi(202943908.[2924] >> 9824, 28215)]][Md[Xi(201326592, 25)]] = Md[Xi(1280, 39)] + Md[Xi(1792, 8)][Xi(23923408.[3539802] >> 2983231, 265)]
    }
})