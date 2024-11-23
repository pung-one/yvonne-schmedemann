"use client";
import mitt from "mitt";
import { Category } from "./types";

export const emitter = mitt<{ hoverImageFromCategory: Category | "none" }>();
