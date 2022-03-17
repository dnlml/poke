import { expect, test } from '@playwright/test';

// Check headers
test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('.main-title')).toBe('Poke');
});

test('about page has expected h1', async ({ page }) => {
  await page.goto('/about');
  expect(await page.textContent('.head-style')).toBe('About');
});

test('pokemons page has expected h1', async ({ page }) => {
  await page.goto('/pokemons');
  expect(await page.textContent('.head-style')).toBe('Pokemons');
});

// Check Nav

test('Nav click on home open the about page that contains the header', async ({ page }) => {
  await page.goto('/about');
  await page.click('text=Home');
  expect(await page.textContent('.main-title')).toBe('Poke');
});

test('Nav click on about open the about page that contains the header', async ({ page }) => {
  await page.goto('/');
  await page.click('text=About');
  expect(await page.textContent('.head-style')).toBe('About');
});

test('Nav click on pokemons open the about page that contains the header', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Pokemons');
  expect(await page.textContent('.head-style')).toBe('Pokemons');
});
