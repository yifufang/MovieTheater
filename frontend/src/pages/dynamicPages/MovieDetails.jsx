import React from 'react';
import { useParams } from 'react-router';

export default function MovieDetails() {
  const { movieHref } = useParams();

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
              Movie
            </h1>
            <div class="leading-relaxed">
              Movie details
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}