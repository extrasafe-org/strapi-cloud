import React, { useState, useEffect } from 'react';
import { Button, Typography, Loader } from '@strapi/design-system';

import { PLUGIN_ID } from '../pluginId';
const PATH = '/clear-cache';

const ClearCacheWidget = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePurge = async () => {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch(`/${PLUGIN_ID}${PATH}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`Failed with status ${res.status}`);
      }

      const data = await res.json();
      setMessage(data.message || 'Cache successfully purged on Vercel 🚀');
    } catch (err) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);
  return (
    <div>
      <Typography variant="omega">
        Before clearing the site cache on Vercel, you{' '}
        <span style={{ color: 'red' }}>must first verify</span> that all modified pages work
        correctly in the development or staging environment.
        <br />
        Only then trigger the cache reset to apply changes live.
      </Typography>

      <div style={{ marginTop: '1rem' }}>
        <Button onClick={handlePurge} disabled={loading}>
          {loading ? <Loader small>Clearing cache...</Loader> : 'Purge Data Cache'}
        </Button>
      </div>

      {message && (
        <Typography style={{ marginTop: '0.5rem' }} textColor="neutral800">
          {message}
        </Typography>
      )}
    </div>
  );
};

export default ClearCacheWidget;
