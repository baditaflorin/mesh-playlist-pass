export default async function playlistPassScenario(a, b) {
  await a.getByLabel("Add a track or link").fill("Midnight City — M83");
  await a.getByRole("button", { name: "Pass the pick" }).click();
  await b.locator(".queue li").waitFor({ timeout: 10_000 });
  await b.getByLabel("Add a track or link").fill("Young Blood — The Naked and Famous");
  await b.getByRole("button", { name: "Pass the pick" }).click();
  await a.locator(".queue li").nth(1).waitFor({ timeout: 10_000 });
  await a.waitForTimeout(1_200);
}
