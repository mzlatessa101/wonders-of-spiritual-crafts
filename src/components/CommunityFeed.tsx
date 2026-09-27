"use client";

import { FormEvent, useState } from "react";
import { initialPosts, Post } from "@/data/community";

export default function CommunityFeed() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [draft, setDraft] = useState("");
  const [commentDrafts, setCommentDrafts] = useState<Record<string, string>>(
    {}
  );
  const [openComments, setOpenComments] = useState<Record<string, boolean>>({});

  function handleCompose(e: FormEvent) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    const newPost: Post = {
      id: `local-${Date.now()}`,
      author: "You",
      avatar: "YO",
      path: "Seeker",
      time: "Just now",
      content: text,
      tags: ["sharing"],
      likes: 0,
      liked: false,
      comments: [],
    };
    setPosts((p) => [newPost, ...p]);
    setDraft("");
  }

  function toggleLike(id: string) {
    setPosts((list) =>
      list.map((p) =>
        p.id === id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1,
            }
          : p
      )
    );
  }

  function addComment(postId: string) {
    const text = (commentDrafts[postId] || "").trim();
    if (!text) return;
    setPosts((list) =>
      list.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [
                ...p.comments,
                {
                  id: `lc-${Date.now()}`,
                  author: "You",
                  text,
                  time: "Just now",
                },
              ],
            }
          : p
      )
    );
    setCommentDrafts((d) => ({ ...d, [postId]: "" }));
    setOpenComments((o) => ({ ...o, [postId]: true }));
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <form onSubmit={handleCompose} className="card space-y-3">
        <label htmlFor="composer" className="block text-sm font-medium text-gold-300">
          Share with the circle
        </label>
        <textarea
          id="composer"
          rows={3}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="A win, a question, a blessing for the feed…"
          className="w-full resize-y rounded-xl border border-mystic-600/40 bg-midnight-900/80 px-4 py-3 text-sm text-moon placeholder:text-mystic-400/50 focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/40"
        />
        <div className="flex justify-end">
          <button type="submit" className="btn-primary !py-2 !px-5 text-xs" disabled={!draft.trim()}>
            Post
          </button>
        </div>
      </form>

      <ul className="space-y-4" aria-label="Community posts">
        {posts.map((post) => (
          <li key={post.id} className="card !p-5">
            <div className="flex items-start gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-mystic-800/60 text-xs font-semibold text-gold-300"
                aria-hidden
              >
                {post.avatar}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="font-medium text-moon">{post.author}</span>
                  <span className="text-xs text-mystic-400">· {post.path}</span>
                  <span className="text-xs text-mystic-500">{post.time}</span>
                </div>
                <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-mystic-100/90">
                  {post.content}
                </p>
                {post.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-mystic-800/60 px-2 py-0.5 text-[11px] text-mystic-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => toggleLike(post.id)}
                    className={`rounded-full px-3 py-1.5 text-xs transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                      post.liked
                        ? "bg-mystic-600/40 text-gold-300"
                        : "bg-midnight-900 text-mystic-300 hover:text-moon"
                    }`}
                    aria-pressed={post.liked}
                  >
                    {post.liked ? "♥" : "♡"} {post.likes}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenComments((o) => ({
                        ...o,
                        [post.id]: !o[post.id],
                      }))
                    }
                    className="rounded-full bg-midnight-900 px-3 py-1.5 text-xs text-mystic-300 hover:text-moon focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                  >
                    💬 {post.comments.length}
                  </button>
                </div>

                {(openComments[post.id] || post.comments.length > 0) &&
                  openComments[post.id] !== false && (
                    <div className="mt-4 space-y-3 border-t border-mystic-700/30 pt-3">
                      {post.comments.map((c) => (
                        <div key={c.id} className="rounded-lg bg-midnight-900/60 px-3 py-2">
                          <p className="text-xs font-medium text-gold-400/90">
                            {c.author}{" "}
                            <span className="font-normal text-mystic-500">
                              {c.time}
                            </span>
                          </p>
                          <p className="mt-0.5 text-sm text-mystic-200">{c.text}</p>
                        </div>
                      ))}
                      <div className="flex gap-2">
                        <label htmlFor={`comment-${post.id}`} className="sr-only">
                          Add a comment
                        </label>
                        <input
                          id={`comment-${post.id}`}
                          value={commentDrafts[post.id] || ""}
                          onChange={(e) =>
                            setCommentDrafts((d) => ({
                              ...d,
                              [post.id]: e.target.value,
                            }))
                          }
                          placeholder="Add a kind comment…"
                          className="flex-1 rounded-full border border-mystic-600/40 bg-midnight-950 px-3 py-2 text-xs text-moon placeholder:text-mystic-500 focus:border-gold-500/40 focus:outline-none"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              addComment(post.id);
                            }
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => addComment(post.id)}
                          className="btn-secondary !px-3 !py-2 text-xs"
                        >
                          Reply
                        </button>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
