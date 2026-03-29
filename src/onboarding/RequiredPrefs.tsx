/**
 * @license
 * Copyright 2026 Google LLC
 * Copyright 2026 ax3cubed (Modifications)
 * SPDX-License-Identifier: Apache-2.0
 *
 * Modifications: see repository CHANGELOG.md.
 */

import { Prefs, usePrefsContext } from "@/util/PrefsProvider";
import { Flex, TextField } from "@radix-ui/themes";
import { KeyIcon } from "lucide-react";

export function areRequiredPrefsSet(prefs: Prefs) {
  return !!prefs.geminiApiKey;
}

export function RequiredPrefs() {
  const { prefs, updatePrefs } = usePrefsContext();
  return (
    <Flex direction="column" gap="2">
      <TextField.Root
        value={prefs.geminiApiKey || ""}
        placeholder="Gemini API key"
        onChange={(ev) =>
          updatePrefs({
            geminiApiKey: ev.currentTarget.value,
          })
        }
        onFocus={(ev) => ev.currentTarget.select()}
      >
        <TextField.Slot>
          <KeyIcon size={16} />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
}
