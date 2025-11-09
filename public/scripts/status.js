// status
(function () {
    const container = document.getElementById('currently');
    if (!container) return;

    const textEl = container.querySelector('.status-text');
    const emojiEl = container.querySelector('.status-emoji');
    if (!textEl || !emojiEl) return;

    const options = {
        timeZone: 'Europe/Copenhagen',
        hour: 'numeric',
        hour12: false,
    };
    const hour = parseInt(
        new Intl.DateTimeFormat([], options).format(new Date()),
        10
    );

    let statusText = '';
    let statusEmoji = '';

    if (hour >= 0 && hour < 6) {
        statusText = 'Sleeping';
        statusEmoji = '💤';
    } else if (hour >= 6 && hour < 10) {
        statusText = 'Morning brew';
        statusEmoji = '☕';
    } else if (hour >= 10 && hour < 18) {
        statusText = 'Tinkering';
        statusEmoji = '🔧';
    } else if (hour >= 18 && hour < 22) {
        statusText = 'Chilling';
        statusEmoji = '🌙';
    } else {
        statusText = 'Winding down';
        statusEmoji = '😴';
    }

    textEl.textContent = statusText;
    emojiEl.textContent = statusEmoji;
})();
