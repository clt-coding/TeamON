import type { Language } from "../types";
import enJson from "./en.json";
import plJson from "./pl.json";

/** Every UI string key; `pl.json` is the source of truth. */
export type TranslationKey = keyof typeof plJson;
export type TranslationParams = Record<string, string | number>;
type Dictionary = Record<TranslationKey, string>;

// Typing `en` as Dictionary makes the build fail if en.json is missing a key.
const pl: Dictionary = plJson;
const en: Dictionary = enJson;

export const dictionaries: Record<Language, Dictionary> = { PL: pl, EN: en };

/** Looks up `key` for `language` and fills `{param}` placeholders. */
export function translate(
  language: Language,
  key: TranslationKey,
  params?: TranslationParams,
): string {
  const text = dictionaries[language][key];
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
}
