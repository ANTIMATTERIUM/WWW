import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const site = JSON.parse(fs.readFileSync("public/site.json", "utf8"));
const html = fs.readFileSync("index.html", "utf8");

assert(site.object === "ANTIMATTERIUM_WWW", "site object mismatch");
assert(site.surface === "public_www", "site surface mismatch");
assert(site.latest_www_release === "v0.1.5-antimatterium-www-external-replay-surface", "www release mismatch");

assert(site.core_projection?.tag === "v0.2.7-antimatterium-external-replay-runner", "core release tag mismatch");
assert(site.core_projection?.control_plane?.digest, "control digest missing");
assert(site.core_projection?.runtime?.event_id, "runtime event id missing");
assert(site.core_projection?.external_replay?.replay_id, "replay id missing");

assert(site.core_projection.release_chain.includes("v0.2.7-antimatterium-external-replay-runner"), "v0.2.7 missing");
assert(site.core_projection.release_chain.includes("v0.2.6-antimatterium-runtime-kernel"), "v0.2.6 missing");
assert(site.core_projection.release_chain.includes("v0.2.5-antimatterium-control-plane"), "v0.2.5 missing");

assert(site.core_projection.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(site.core_projection.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(site.core_projection.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

assert(html.includes(site.core_projection.control_plane.digest), "control digest not projected");
assert(html.includes(site.core_projection.runtime.event_id), "runtime event not projected");
assert(html.includes(site.core_projection.external_replay.replay_id), "replay id not projected");
assert(html.includes("ANTIMATTERIUM_V027_EXTERNAL_REPLAY_SURFACE_START"), "surface marker missing");

console.log("ANTIMATTERIUM_WWW_V015_EXTERNAL_REPLAY_SURFACE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_CORE_V027_PROJECTION_BOUND=true");
console.log("ANTIMATTERIUM_WWW_CONTROL_DIGEST_BOUND=true");
console.log("ANTIMATTERIUM_WWW_RUNTIME_EVENT_BOUND=true");
console.log("ANTIMATTERIUM_WWW_REPLAY_ID_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
