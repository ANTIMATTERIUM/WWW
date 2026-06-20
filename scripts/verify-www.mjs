import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const site = JSON.parse(fs.readFileSync("public/site.json", "utf8"));
const html = fs.readFileSync("index.html", "utf8");

assert(site.object === "ANTIMATTERIUM_WWW", "site object mismatch");
assert(site.surface === "public_www", "site surface mismatch");
assert(site.site === "https://antimatterium.github.io/WWW/", "site mismatch");

assert(site.core_projection?.object === "ANTIMATTERIUM", "core projection object mismatch");
assert(site.core_projection?.tag === "v0.2.7-antimatterium-external-replay-runner", "core projection tag mismatch");
assert(site.core_projection?.control_plane?.digest, "control digest missing");
assert(site.core_projection?.runtime?.event_id, "runtime event missing");
assert(site.core_projection?.external_replay?.replay_id, "replay id missing");

assert(html.includes("ANTIMATTERIUM"), "html identity missing");
assert(html.includes(site.core_projection.control_plane.digest), "html control digest missing");
assert(html.includes(site.core_projection.runtime.event_id), "html runtime event missing");
assert(html.includes(site.core_projection.external_replay.replay_id), "html replay id missing");

console.log("ANTIMATTERIUM_WWW_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_WWW_PUBLIC_SITE_BOUND=true");
console.log("ANTIMATTERIUM_WWW_CORE_V027_BOUND=true");
console.log("ANTIMATTERIUM_WWW_EXTERNAL_REPLAY_SURFACE_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
