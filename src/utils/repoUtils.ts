// src/utils/repository.ts
import * as github from '@actions/github'
import { Repository, Config } from '../types'

export function getGitHubRepo(config: Config): Repository {
  const context = github.context
  return {
    owner: config.github.username || context.repo.owner,
    repo: config.github.repo || context.repo.repo
  }
}

export function getGitLabRepo(config: Config): Repository {
  const context = github.context

  // Return empty repository if projectId is provided
  if (config.gitlab?.projectId) {
    return { owner: '', repo: '' }
  }

  // Otherwise use username/repo
  return {
    owner: config.gitlab.username || context.repo.owner,
    repo: config.gitlab.repo || context.repo.repo
  }
}