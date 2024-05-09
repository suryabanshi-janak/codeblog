'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

const ViewCounter = ({
  slug,
  noCount = false,
  showCount = true,
}: {
  slug: string;
  noCount?: boolean;
  showCount?: boolean;
}) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc('increment', {
          slug_text: slug,
        });

        if (error) {
          console.error(
            'Error incrementing view count inside try block:',
            error
          );
        }
      } catch (error) {
        console.error(
          'An error occurred while incrementing the view count:',
          error
        );
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug: slug })
          .single();

        if (error) {
          console.error(
            'Error incrementing view count inside try block:',
            error
          );
        }

        setViews(data ? data.count : 0);
      } catch (error) {
        console.error(
          'An error occurred while incrementing the view count:',
          error
        );
      }
    };

    getViews();
  }, [slug]);

  if (!showCount) return null;

  return <div>{views} views</div>;
};

export default ViewCounter;
