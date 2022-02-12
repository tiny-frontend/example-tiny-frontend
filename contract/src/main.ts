import {
  loadTinyFrontendClient,
  loadTinyFrontendServer,
} from "@tiny-frontend/client";
import { TinyFrontendServerResponse } from "@tiny-frontend/client/dist/load.server";
import React from "react";

import type exportedModule from "../../app/lib/index";
import { tinyFrontendName, version } from "../package.json";

export type ExampleTinyFrontendType = typeof exportedModule;

export const loadExampleTinyFrontendServer = async (
  tinyApiEndpoint: string
): Promise<TinyFrontendServerResponse<ExampleTinyFrontendType>> =>
  await loadTinyFrontendServer<ExampleTinyFrontendType>({
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
  await loadTinyFrontendClient<ExampleTinyFrontendType>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
  });
