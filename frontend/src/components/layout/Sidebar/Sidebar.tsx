import { useState } from "react";
import { Icon } from "../../ui/Icon";
import { POSITIONS, positionMarks } from "../../../data/positions";
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
        aria-label={collapsed ? "Rozwiń filtry" : "Zwiń filtry"}
        aria-expanded={!collapsed}
      >
        <Icon name="chevron" />
      </button>
      {collapsed ? (
        <div className={styles.collapsedLabel}>
          <Icon name="sliders" />
          <span>FILTRY</span>
        </div>
      ) : (
        <>
          <div className={styles.heading}>
            <span>WYSZUKIWANIE</span>
            <h2>Czego szukasz?</h2>
          </div>
          <div className={styles.searchType}>
            <button
              type="button"
              className={cx(searchType === "player" && styles.active)}
              aria-pressed={searchType === "player"}
              onClick={() => setSearchType("player")}
            >
              <Icon name="users" size={18} /> Gracza
            </button>
            <button
              type="button"
              className={cx(searchType === "tournament" && styles.active)}
              aria-pressed={searchType === "tournament"}
              onClick={() => setSearchType("tournament")}
            >
              Turnieju
            </button>
          </div>
          <div className={styles.filterGroup}>
            <label>
              POZYCJA{" "}
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
            <label htmlFor="language-filter">JĘZYK</label>
            <select id="language-filter">
              <option>Dowolny język</option>
              <option>Polski</option>
              <option>Angielski</option>
              <option>Niemiecki</option>
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
                Tak
              </button>
              <button
                type="button"
                className={cx(!voiceChat && styles.active)}
                aria-pressed={!voiceChat}
                onClick={() => setVoiceChat(false)}
              >
                Nie
              </button>
            </div>
          </div>
          <button
            type="button"
            className={styles.clearFilters}
            onClick={() => onPositionsChange([])}
          >
            Wyczyść filtry
          </button>
        </>
      )}
    </aside>
  );
}
