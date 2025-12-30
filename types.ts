
export type UserRole = 'Admin' | 'Member' | 'Viewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type TaskStatusType = 'Todo' | 'In Progress' | 'Review' | 'Done' | string;

export interface SubTask {
  id: string;
  title: string;
  isCompleted: boolean;
  linkedTaskId?: string;
  startDate?: string;
  dueDate?: string;
}

export interface CustomField {
  id: string;
  name: string;
  type: 'text' | 'number' | 'date' | 'select' | 'url' | 'checkbox';
  value?: string | number | boolean;
  options?: string[];
}

export interface ActivityLog {
  id: string;
  userId: string;
  action: 'comment' | 'update' | 'create' | 'upload';
  details: string; 
  timestamp: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatusType;
  statusColor?: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  dueDate?: string;
  startDate?: string;
  assignees: string[];
  projectId: string;
  listId: string;
  tags: string[];
  dependencies?: string[];
  sprintPoints?: number;
  subtasks: SubTask[]; 
  parentId?: string;
  customFields?: CustomField[];
  createdAt: string;
  activityLog?: ActivityLog[];
  timeEstimate?: string;
  timeTracked?: string;
}

export interface ProjectList {
  id: string;
  name: string;
  statuses?: { name: string; color: string }[];
}

export interface Project {
  id: string;
  code: string;
  name: string;
  type: string;
  scope: string;
  location: string;
  startDate: string;
  endDate: string;
  lists: ProjectList[];
  customFields: CustomField[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId?: string; 
  channelId?: string;
  subject?: string;
  content: string;
  timestamp: string;
  hasAttachments: boolean;
  attachments?: { name: string; size: string; type: string }[];
  isRead: boolean;
  isPinned?: boolean;
  replyToId?: string; // ID of the message being replied to
}

export interface Channel {
  id: string;
  name: string;
  members: string[]; 
  isPrivate: boolean;
  avatar?: string; // Channel profile image
  description?: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  participants: string[];
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}
