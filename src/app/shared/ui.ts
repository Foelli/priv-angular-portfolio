export type Project = {
    title: string;           // Projektname
    blurb: string;           // Kurzbeschreibung
    tags: string[];          // Schlagwörter (z. B. "Angular", "Tailwind")
    metric?: string;         // z. B. "LCP < 1.2s" oder "Bundle: 140KB"
    live?: string;           // Link zur Live-Demo (optional)
    code: string;            // Link zum Code-Repo
    category: 'Web App' | 'Library' | 'Tooling' | 'UI/UX';
    tech: string[];          // genutzte Technologien
};