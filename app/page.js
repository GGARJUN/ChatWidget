"use client";

// Import from next/navigation instead of next/router
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ChatWidget from './_components/ChatWidget';

export default function Widget() {
  const router = useRouter();
  const [projectId, setProjectId] = useState('default_project');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // App Router's router doesn't have `isReady` or `query`
    // So we check if window is defined (client-side) and parse URL manually

    if (typeof window !== 'undefined') {
      const search = window.location.search || window.location.href.split('?')[1] || '';
      const params = new URLSearchParams(search);

      const qProjectId = params.get('project_id');
      const qTags = params.get('tags');

      if (qProjectId) setProjectId(qProjectId);
      if (qTags) setTags(qTags.split(','));
    }
  }, []);

  return (
    <div className="h-screen bg-transparent">
      <ChatWidget projectId={projectId} tags={tags} />
    </div>
  );
}