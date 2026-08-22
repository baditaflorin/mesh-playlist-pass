import { useState } from "react";
import { useSharedPlaylist } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

type Props = { room: YRoom | null; config: MeshConfig };

export function Feature({ room, config }: Props) {
  const playlist = useSharedPlaylist(room, "playlist-pass");
  const [title, setTitle] = useState("");

  const addTrack = () => {
    if (playlist.add(title)) setTitle("");
  };

  return (
    <main className="feature-placeholder">
      <h1>{config.appName}</h1>
      <p>{config.description}</p>
      <p className="feature-status" aria-live="polite">
        {room
          ? `${playlist.entries.length} pick${playlist.entries.length === 1 ? "" : "s"} · ${room.peerCount} peer(s) here`
          : "Connecting to the listening room…"}
      </p>
      <form
        className="track-form"
        onSubmit={(event) => {
          event.preventDefault();
          addTrack();
        }}
      >
        <label htmlFor="track-title">Add a track or link</label>
        <div className="track-entry">
          <input
            id="track-title"
            value={title}
            maxLength={160}
            placeholder="e.g. Midnight City — M83"
            onChange={(event) => setTitle(event.target.value)}
          />
          <button type="submit" disabled={!title.trim() || !room}>
            Pass the pick
          </button>
        </div>
      </form>
      <section className="queue" aria-label="Shared playlist">
        <h2>Up next</h2>
        {playlist.entries.length === 0 ? (
          <p className="empty-state">The queue is open. Add the first pick.</p>
        ) : (
          <ol>
            {playlist.entries.map((entry, index) => (
              <li key={entry.id} className={index === 0 ? "now-playing" : undefined}>
                <span>
                  <strong>{index === 0 ? "Now playing" : `Pick ${index + 1}`}</strong>
                  {entry.title}
                </span>
                {entry.addedBy === room?.peerId && (
                  <button
                    type="button"
                    className="remove"
                    aria-label={`Remove ${entry.title}`}
                    onClick={() => playlist.removeMine(entry.id)}
                  >
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  );
}
