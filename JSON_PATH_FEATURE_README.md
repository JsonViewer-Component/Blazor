# 🎯 JSON Path Viewer & Copy Feature

## ✅ فایل‌های اضافه شده

### 1️⃣ Model
- **`src/Component/Models/JsonPathInfo.cs`**
  - Model برای نگهداری اطلاعات JSON Path
  - Properties: Path, PropertyName, PropertyValue, PropertyType, IsSelected, Level

### 2️⃣ Component  
- **`src/Component/Core/Features/JsonPathDisplay.razor`**
  - Component نمایش JSON Path با UI زیبا
  - نمایش Path، Property Name، Type و Value
  - دکمه Copy با feedback

- **`src/Component/Core/Features/JsonPathDisplay.razor.css`**
  - استایل‌های کامل برای JsonPathDisplay
  - پشتیبانی Dark/Light Theme
  - Responsive و با Animation

### 3️⃣ CSS Enhancement
- **`src/Component/Core/JsonViewer.razor.css`**
  - استایل clickable برای property names
  - Hover effects با رنگ primary

## 📋 مراحل باقیمانده برای تکمیل فیچر

### ⚠️ نیاز به انجام:

1. **اضافه کردن به JsonViewer.razor:**
   - اضافه کردن `JsonPathDisplay` component
   - اضافه کردن متغیر `currentJsonPath`
   - اضافه کردن JavaScript handler برای کلیک
   - اضافه کردن متدهای محاسبه JSON Path

2. **تغییر در rendering:**
   - اضافه کردن `clickable-property` class به property names
   - اضافه کردن `data-line-index` و `data-property-name` attributes

## 🎨 نحوه کار فیچر

1. کاربر روی یک property name کلیک می‌کند
2. JavaScript event را catch می‌کند و به C# منتقل می‌کند
3. متد `OnPropertyClick` صدا زده می‌شود
4. JSON Path محاسبه می‌شود (مثل `$.user.profile.name`)
5. یک popup در گوشه صفحه نمایش داده می‌شود با:
   - JSON Path کامل
   - نام Property
   - نوع داده (String, Number, Object, ...)
   - مقدار Property
   - دکمه Copy

## 🚀 مثال استفاده

```json
{
  "user": {
    "profile": {
      "name": "John",
      "age": 30
    }
  }
}
```

وقتی کاربر روی `"name"` کلیک کنه:
- **Path**: `$.user.profile.name`
- **Property**: `name`
- **Type**: `String`
- **Value**: `John`

## 📦 وضعیت فعلی

✅ **کامل شده:**
- Model (JsonPathInfo)
- UI Component (JsonPathDisplay)
- CSS و Styling
- Structure آماده است

⚠️ **نیاز به تکمیل:**
- Integration با JsonViewer
- JavaScript event handlers
- متدهای محاسبه Path

## 🔧 کدهای آماده برای Integration

تمام کدهای لازم نوشته شده و آماده است فقط باید به JsonViewer اضافه شوند.

---

**تاریخ:** 2025
**وضعیت:** آماده برای Integration
**نسخه:** v1.0
