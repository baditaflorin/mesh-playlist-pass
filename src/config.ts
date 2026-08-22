import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "mesh-playlist-pass",
  description: "Build a shared listening queue and pass the next pick between friends.",
  accentHex: "#f97316",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
