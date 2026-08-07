import { useState } from "react";
import { Toggle, ToggleGroup, ToggleGroupItem } from "@dubalu-dev/design-system";

const BoldIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 4h8a4 4 0 010 8H6zM6 12h9a4 4 0 010 8H6z"/></svg>;
const ItalicIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>;
const UnderlineIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3v7a6 6 0 0012 0V3M4 21h16"/></svg>;

const ListIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
const GridIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;

function StandaloneToggles() {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Toggle pressed={bold} onPressedChange={setBold} aria-label="Negrita"><BoldIcon /></Toggle>
        <Toggle pressed={italic} onPressedChange={setItalic} aria-label="Cursiva"><ItalicIcon /></Toggle>
        <Toggle pressed={underline} onPressedChange={setUnderline} aria-label="Subrayado"><UnderlineIcon /></Toggle>
      </div>
      <div className="flex gap-2">
        <Toggle variant="outline" size="sm" pressed={bold} onPressedChange={setBold} aria-label="Negrita"><BoldIcon /></Toggle>
        <Toggle variant="outline" size="sm" pressed={italic} onPressedChange={setItalic} aria-label="Cursiva"><ItalicIcon /></Toggle>
        <Toggle variant="outline" size="sm" pressed={underline} onPressedChange={setUnderline} aria-label="Subrayado"><UnderlineIcon /></Toggle>
      </div>
    </div>
  );
}

function SegmentedGroup() {
  const [view, setView] = useState("list");
  return (
    <ToggleGroup type="single" variant="segmented" value={view} onValueChange={(v) => v && setView(v)} required>
      <ToggleGroupItem value="list"><ListIcon /><span className="ml-1.5">Lista</span></ToggleGroupItem>
      <ToggleGroupItem value="grid"><GridIcon /><span className="ml-1.5">Cuadrícula</span></ToggleGroupItem>
    </ToggleGroup>
  );
}

function PillsGroup() {
  const [tags, setTags] = useState<string[]>(["influencer"]);
  return (
    <ToggleGroup
      type="multiple"
      variant="pills"
      value={tags}
      onValueChange={(v) => setTags(v as string[])}
    >
      {["influencer", "anunciante", "cliente", "admin"].map((tag) => (
        <ToggleGroupItem key={tag} value={tag}>{tag}</ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export default function ToggleExamples() {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">Toggle individual — default y outline</p>
        <StandaloneToggles />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">ToggleGroup segmented — vista única</p>
        <SegmentedGroup />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--ds-color-muted)] mb-3">ToggleGroup pills — filtros múltiples</p>
        <PillsGroup />
      </div>
    </div>
  );
}
