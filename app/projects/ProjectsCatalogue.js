"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { projects } from "../data/projects";

const PER_PAGE = 6;

function ProjectCard({ project, number }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#10142b] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_24px_70px_rgba(14,165,233,.14)]">
      <div className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.30),transparent_38%),linear-gradient(135deg,#17214a,#0b0e20)] px-7 pb-7 pt-6">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-cyan-200/20" />
        <div className="relative flex items-start justify-between gap-5">
          <div>
            <p className="mono text-xs font-bold tracking-[.18em] text-cyan-300">PROJECT {String(number).padStart(2, "0")}</p>
            <p className="mt-3 text-sm font-semibold text-violet-200">{project.client}</p>
          </div>
          {project.url && <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="rounded-full border border-white/20 bg-[#090c1d]/70 p-3 text-white transition hover:border-cyan-300 hover:bg-cyan-300 hover:text-[#090c1d]"><ArrowUpRight size={19} /></a>}
        </div>
        <h2 className="display relative mt-9 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">{project.title}</h2>
      </div>
      <div className="p-7">
        <p className="min-h-[78px] leading-7 text-slate-400">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-100">{technology}</span>)}
        </div>
        {project.url ? <a href={project.url} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white">Visit project <ArrowUpRight size={16} /></a> : <p className="mt-7 text-sm font-medium text-slate-500">Private project - details available on request</p>}
      </div>
    </article>
  );
}

export default function ProjectsCatalogue() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return projects;
    return projects.filter((project) => [project.title, project.client, project.description, ...project.technologies].join(" ").toLowerCase().includes(value));
  }, [query]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const activePage = Math.min(page, totalPages);
  const pageProjects = filtered.slice((activePage - 1) * PER_PAGE, activePage * PER_PAGE);
  const updateQuery = (value) => { setQuery(value); setPage(1); };

  return (
    <main className="noise min-h-screen pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white"><ArrowLeft size={17} /> Back to portfolio</Link>
        <div className="mt-12 border-b border-white/10 pb-12">
          <p className="eyebrow text-cyan-300">Complete portfolio</p>
          <div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div><h1 className="section-title text-white">My <span className="text-violet-400">projects.</span></h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Software built for operations, commerce, travel, healthcare and growing businesses.</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[.04] px-6 py-4"><span className="mono text-xs uppercase tracking-wider text-slate-500">Total projects</span><strong className="ml-4 text-3xl text-cyan-300">{projects.length}</strong></div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#11152d] p-4">
          <label className="relative block"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300" size={20} /><input value={query} onChange={(event) => updateQuery(event.target.value)} placeholder="Search by project, client or technology..." className="w-full rounded-xl border border-white/10 bg-[#080a14] py-4 pl-12 pr-12 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300" />{query && <button onClick={() => updateQuery("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"><X size={18} /></button>}</label>
          <p className="mono mt-3 px-2 text-xs uppercase tracking-wider text-slate-500"><span className="text-cyan-300">{filtered.length}</span> matching projects</p>
        </div>
        {pageProjects.length ? <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">{pageProjects.map((project, index) => <ProjectCard key={project.title} project={project} number={(activePage - 1) * PER_PAGE + index + 1} />)}</div> : <div className="mt-8 rounded-3xl border border-dashed border-white/15 bg-white/[.03] px-6 py-20 text-center"><Search className="mx-auto text-slate-500" size={34} /><h2 className="mt-5 text-xl font-bold text-white">No project found</h2><p className="mt-2 text-slate-400">Try searching with another technology or project name.</p><button onClick={() => updateQuery("")} className="mt-6 rounded-full border border-cyan-300/60 px-5 py-2.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-300 hover:text-[#080a14]">Clear search</button></div>}
        {filtered.length > PER_PAGE && <nav aria-label="Project pagination" className="mt-12 flex items-center justify-center gap-2"><button aria-label="Previous page" onClick={() => setPage(Math.max(1, activePage - 1))} disabled={activePage === 1} className="rounded-xl border border-white/15 p-3 text-white disabled:opacity-30"><ChevronLeft size={19} /></button>{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => <button key={number} onClick={() => setPage(number)} className={`h-11 min-w-11 rounded-xl px-3 font-bold transition ${number === activePage ? "bg-cyan-300 text-[#080a14]" : "border border-white/15 text-slate-300 hover:border-cyan-300 hover:text-white"}`}>{number}</button>)}<button aria-label="Next page" onClick={() => setPage(Math.min(totalPages, activePage + 1))} disabled={activePage === totalPages} className="rounded-xl border border-white/15 p-3 text-white disabled:opacity-30"><ChevronRight size={19} /></button></nav>}
      </div>
    </main>
  );
}
