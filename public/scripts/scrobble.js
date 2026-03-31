// Scrobble (Listenbrainz)
const fixEncoding = (s) =>
    new TextDecoder().decode(new Uint8Array([...s].map((c) => c.charCodeAt(0))));

(async () => {
    const trackLink = document.querySelector('.listened .track');
    if (!trackLink) return;

    try {
        const res = await fetch(
            'https://api.listenbrainz.org/1/user/flipse/listens?count=1',
        );
        const t = (await res.json()).payload.listens?.[0]?.track_metadata;
        if (t) {
            trackLink.textContent = `${t.track_name} — ${t.artist_name}`;
        }
    } catch (e) {
        console.error('Failed to fetch ListenBrainz data:', e);
    }
})();
