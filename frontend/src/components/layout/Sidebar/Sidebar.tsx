import { useState } from "react";
import { Icon } from "../../ui/Icon";
import { POSITIONS, positionMarks } from "../../../data/positions";
import { useTranslation } from "../../../i18n";
import type { Position } from "../../../types";
import { cx } from "../../../utils/cx";
import styles from "./Sidebar.module.css";

type SearchType = "player" | "tournament";

export interface SidebarProps {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  positions: Position[];
  onPositionsChange: (positions: Position[]) => void;
}

export function Sidebar({
  collapsed,
  onCollapsedChange,
  positions,
  onPositionsChange,
}: SidebarProps) {
  const { t } = useTranslation();
  const [searchType, setSearchType] = useState<SearchType>("player");
  const [voiceChat, setVoiceChat] = useState(true);

  const togglePosition = (position: Position) => {
    onPositionsChange(
      positions.includes(position)
        ? positions.filter((item) => item !== position)
        : [...positions, position],
    );
  };

  return (
    <aside className={cx(styles.sidebar, collapsed && styles.collapsed)}>
      <button
        type="button"
        className={styles.collapseButton}
        onClick={() => onCollapsedChange(!collapsed)}
        aria-label={collapsed ? t("sidebar.expand") : t("sidebar.collapse")}
        aria-expanded={!collapsed}
      >
        <Icon name="chevron" />
      </button>
      {collapsed ? (
        <div className={styles.collapsedLabel}>
          <Icon name="sliders" />
          <span>{t("sidebar.filters")}</span>
        </div>
      ) : (
        <>
          <div className={styles.heading}>
            <span>{t("sidebar.kicker")}</span>
            <h2>{t("sidebar.heading")}</h2>
          </div>
          <div className={styles.searchType}>
            <button
              type="button"
              className={cx(searchType === "player" && styles.active)}
              aria-pressed={searchType === "player"}
              onClick={() => setSearchType("player")}
            >
              <Icon name="users" size={18} /> {t("sidebar.searchPlayer")}
            </button>
            <button
              type="button"
              className={cx(searchType === "tournament" && styles.active)}
              aria-pressed={searchType === "tournament"}
              onClick={() => setSearchType("tournament")}
            >
              {t("sidebar.searchTournament")}
            </button>
          </div>
          <div className={styles.filterGroup}>
            <label>
              {t("sidebar.position")}{" "}
              <span>{positions.length ? `0${positions.length}` : ""}</span>
            </label>
            <div className={styles.positionList}>
              {POSITIONS.map((position) => (
                <button
                  type="button"
                  key={position}
                  onClick={() => togglePosition(position)}
                  aria-pressed={positions.includes(position)}
                  className={cx(positions.includes(position) && styles.selected)}
                >
                  <span>{positionMarks[position]}</span>
                  {position}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="language-filter">{t("sidebar.language")}</label>
            <select id="language-filter">
              <option>{t("sidebar.anyLanguage")}</option>
              <option>{t("sidebar.polish")}</option>
              <option>{t("sidebar.english")}</option>
              <option>{t("sidebar.german")}</option>
            </select>
          </div>
          <div className={cx(styles.filterGroup, styles.voiceFilter)}>
            <label>VOICE CHAT</label>
            <div>
              <button
                type="button"
                className={cx(voiceChat && styles.active)}
                aria-pressed={voiceChat}
                onClick={() => setVoiceChat(true)}
              >
                {t("sidebar.yes")}
              </button>
              <button
                type="button"
                className={cx(!voiceChat && styles.active)}
                aria-pressed={!voiceChat}
                onClick={() => setVoiceChat(false)}
              >
                {t("sidebar.no")}
              </button>
            </div>
          </div>
          <button
            type="button"
            className={styles.clearFilters}
            onClick={() => onPositionsChange([])}
          >
            {t("sidebar.clearFilters")}
          </button>
        </>
      )}
    </aside>
  );
}
