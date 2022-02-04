import {
  loadTinyFrontendClient,
  loadTinyFrontendServer,
} from "@tiny-frontend/client";
import { TinyFrontendServerResponse } from "@tiny-frontend/client/dist/load.server";
import React from "react";

import { tinyFrontendName, version } from "../package.json";

interface ExampleTinyFrontendProps {
  name: string;
}

export type ExampleTinyFrontendType = React.FC<ExampleTinyFrontendProps>;

export const loadExampleTinyFrontendServer = async (
  tinyApiEndpoint: string
): Promise<TinyFrontendServerResponse<ExampleTinyFrontendType>> =>
  await loadTinyFrontendServer<React.FC>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
  });

export const loadExampleTinyFrontendClient = async (
  tinyApiEndpoint: string
): Promise<ExampleTinyFrontendType> =>
  await loadTinyFrontendClient<React.FC>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
  });
