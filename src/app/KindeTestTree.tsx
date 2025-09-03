"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export function DeepestChild() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading DeepestChild...</div>;
  return (
    <div style={{ border: "1px solid #eee", margin: 8, padding: 8 }}>
      <strong>DeepestChild:</strong> {isAuthenticated ? user?.email : "Not signed in"}
    </div>
  );
}

export function DeeperChild() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading DeeperChild...</div>;
  return (
    <div style={{ border: "1px solid #ddd", margin: 8, padding: 8 }}>
      <strong>DeeperChild:</strong> {isAuthenticated ? user?.email : "Not signed in"}
      <DeepestChild />
    </div>
  );
}

export function EvenDeeperChild() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading EvenDeeperChild...</div>;
  return (
    <div style={{ border: "1px solid #bbb", margin: 8, padding: 8 }}>
      <strong>EvenDeeperChild:</strong> {isAuthenticated ? user?.email : "Not signed in"}
      <DeeperChild />
    </div>
  );
}

export function DeepChild() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  if (isLoading) return <div>Loading DeepChild...</div>;
  return (
    <div style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
      <strong>DeepChild:</strong> {isAuthenticated ? user?.email : "Not signed in"}
      <EvenDeeperChild />
    </div>
  );
}

export function Child() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  let childContent;
  if (isLoading) {
    childContent = "Loading...";
  } else if (isAuthenticated) {
    childContent = user?.email;
  } else {
    childContent = "Not signed in";
  }
  return (
    <div style={{ border: "1px solid #aaa", margin: 8, padding: 8 }}>
      <strong>Child:</strong> {childContent}
      <DeepChild />
    </div>
  );
}

export default function KindeTestTree() {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  let rootContent;
  if (isLoading) {
    rootContent = "Loading...";
  } else if (isAuthenticated) {
    rootContent = user?.email;
  } else {
    rootContent = "Not signed in";
  }
  return (
    <div style={{ border: "2px solid #333", margin: 8, padding: 8 }}>
      <strong>Root:</strong> {rootContent}
      <Child />
    </div>
  );
}
