import { Project, Task, FetchIssuesParams, Profile } from '@/types'
import http from './instance'

const api = {
  fetchUserInfo: async (code: string) => {
    try {
      const response = await http.get('/auth/github/callback', {
        params: { code },
      })

      console.log('User info:', response.data)
      if (response.data.data && response.data.data.jwt) {
        return response.data.data // 返回 JWT
      }
    } catch (error) {
      console.error('Error fetching user info:', error)
    }
  },
  fetchTask: async (githubId: string): Promise<Task | null> => {
    try {
      const response = await http.get(`/task/${githubId}`)

      if (response.data) {
        return response.data
      }

      return null
    } catch (error) {
      console.error('Error fetching task info:', error)
      return null
    }
  },
  fetchTasks: async (params: FetchIssuesParams): Promise<Task[] | null> => {
    try {
      const response = await http.get('/tasks', {
        params,
      })

      if (response.data) {
        return response.data
      }
      return null
    } catch (error) {
      console.error('Error fetching user info:', error)
      return null
    }
  },
  fetchProjects: async (): Promise<Project[] | null> => {
    try {
      const response = await http.get('/projects')
      if (response.data) {
        return response.data
      }
    } catch (error) {
      console.log('Error fetching projects:', error)
    }
    return null
  },
  fetchLeaderboard: async (): Promise<Profile[] | null> => {
    try {
      const response = await http.get('/leaderboard')

      if (response.data) {
        return response.data
      }
      return null
    } catch (error) {
      console.error('Error fetching leaderboard:', error)
      return null
    }
  },
  fetchTutorialContent: async (githubId: string): Promise<string> => {
    try {
      const response = await http.get('/tutorial/' + githubId)

      if (response.data) {
        return response.data
      }
      return ''
    } catch (error) {
      console.error('Error fetching tutorial content:', error)
      return ''
    }
  },
}

export default api
