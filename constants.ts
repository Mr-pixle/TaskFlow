import { User, Project, Task, Channel, Message, Meeting, Note } from './types';

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'علی محمدی',
  email: 'ali@example.com',
  role: 'Admin',
  avatar: 'https://picsum.photos/200/200',
};

export const MOCK_USERS: User[] = [
  CURRENT_USER,
  { id: 'u2', name: 'سارا احمدی', email: 'sara@example.com', role: 'Member', avatar: 'https://picsum.photos/201/201' },
  { id: 'u3', name: 'رضا کمالی', email: 'reza@example.com', role: 'Member', avatar: 'https://picsum.photos/202/202' },
  { id: 'u4', name: 'مریم حسینی', email: 'maryam@example.com', role: 'Viewer', avatar: 'https://picsum.photos/203/203' },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    code: 'PRJ-001',
    name: 'طراحی وبسایت شرکتی',
    type: 'Software',
    scope: 'External',
    location: 'Tehran',
    startDate: '1403/01/15',
    endDate: '1403/04/30',
    lists: [{ id: 'l1', name: 'بک‌لاگ' }, { id: 'l2', name: 'در حال انجام' }, { id: 'l3', name: 'تست' }],
    customFields: [
        { id: 'cf1', name: 'دپارتمان', type: 'text', value: 'IT' },
        { id: 'cf2', name: 'بودجه', type: 'number', value: '5000000' }
    ],
  },
  {
    id: 'p2',
    code: 'PRJ-002',
    name: 'کمپین تبلیغاتی تابستان',
    type: 'Marketing',
    scope: 'Internal',
    location: 'Remote',
    startDate: '1403/03/01',
    endDate: '1403/06/31',
    lists: [{ id: 'l4', name: 'ایده‌پردازی' }, { id: 'l5', name: 'اجرا' }],
    customFields: [],
  },
];

export const MOCK_TASKS: Task[] = [
  {
    id: 't1',
    title: 'طراحی اولیه صفحه اصلی',
    status: 'Done',
    priority: 'High',
    projectId: 'p1',
    listId: 'l2',
    assignees: ['u1', 'u2'],
    tags: ['UI', 'Design'],
    subtasks: [{ id: 'st1', title: 'هدر', isCompleted: true }, { id: 'st2', title: 'فوتر', isCompleted: false }],
    createdAt: '2023-10-01',
    dueDate: '2023-10-15',
    activityLog: [
        { id: 'log1', userId: 'u1', action: 'create', details: 'تسک را ایجاد کرد', timestamp: '1403/07/01 10:00' },
        { id: 'log2', userId: 'u2', action: 'update', details: 'وضعیت را به انجام شده تغییر داد', timestamp: '1403/07/05 14:30' }
    ],
    customFields: [{ id: 'cf1', name: 'دپارتمان', type: 'text', value: 'Design' }]
  },
  {
    id: 't2',
    title: 'پیاده‌سازی دیتابیس',
    status: 'In Progress',
    priority: 'Urgent',
    projectId: 'p1',
    listId: 'l2',
    assignees: ['u3'],
    tags: ['Backend', 'DB'],
    subtasks: [],
    createdAt: '2023-10-05',
    dueDate: '2023-10-20',
    activityLog: [],
  },
  {
    id: 't3',
    title: 'تهیه محتوای متنی',
    status: 'Todo',
    priority: 'Medium',
    projectId: 'p2',
    listId: 'l4',
    assignees: ['u1'],
    tags: ['Content'],
    subtasks: [],
    createdAt: '2023-10-10',
    dueDate: '2023-11-01',
    activityLog: [],
  },
  {
    id: 't4',
    title: 'بازبینی نهایی طرح‌ها',
    status: 'Review',
    priority: 'High',
    projectId: 'p1',
    listId: 'l3',
    assignees: ['u1', 'u4'],
    tags: ['QA'],
    subtasks: [],
    createdAt: '2023-10-12',
    dueDate: '2023-10-18', // Overdue mock
    activityLog: [],
  }
];

// Fix: Added missing isPrivate property to Channel mock objects
export const MOCK_CHANNELS: Channel[] = [
  { id: 'c1', name: 'عمومی', members: ['u1', 'u2', 'u3', 'u4'], isPrivate: false },
  { id: 'c2', name: 'تیم فنی', members: ['u1', 'u3'], isPrivate: false },
  { id: 'c3', name: 'مارکتینگ', members: ['u2', 'u4'], isPrivate: false },
];

export const MOCK_MESSAGES: Message[] = [
  { id: 'm1', senderId: 'u2', receiverId: 'u1', subject: 'جلسه هماهنگی', content: 'سلام، فردا ساعت ۱۰ جلسه داریم؟', timestamp: '10:30', hasAttachments: false, isRead: false },
  { id: 'm2', senderId: 'u3', receiverId: 'u1', subject: 'گزارش باگ', content: 'باگ گزارش شده در لاگین برطرف شد.', timestamp: 'Yesterday', hasAttachments: true, isRead: true },
];

export const MOCK_MEETINGS: Meeting[] = [
  { id: 'mt1', title: 'بررسی اسپرینت', date: '1403/08/10', startTime: '10:00', endTime: '11:00', participants: ['u1', 'u2', 'u3'], status: 'Scheduled' },
  { id: 'mt2', title: 'جلسه مدیران', date: '1403/08/12', startTime: '14:00', endTime: '15:30', participants: ['u1', 'u4'], status: 'Scheduled' },
];

export const MOCK_NOTES: Note[] = [
  { id: 'n1', title: 'ایده‌های محصول', content: 'اضافه کردن تم تاریک به صورت خودکار...', updatedAt: '1403/08/01' },
  { id: 'n2', title: 'لیست خرید شرکت', content: 'قهوه، چای، کاغذ A4', updatedAt: '1403/08/05' },
];