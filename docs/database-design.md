# Siraj POS - Database Design v1

## فكرة النظام
سراج هو برنامج Offline لإدارة محل مواد بناء على جهاز واحد، مع حسابات وصلاحيات داخلية.

## الصلاحيات
- Admin: مدير كامل
- Cashier: موظف بيع
- Storekeeper: موظف مخزن

## الجداول الأساسية

### users
- id
- name
- username
- password_hash
- role
- is_active
- created_at

### products
- id
- name
- barcode
- category_id
- base_unit_id
- stock_quantity
- purchase_price
- default_sale_price
- min_quantity
- image_path
- is_active
- created_at

### units
- id
- name
- symbol

أمثلة:
- حبة
- كرتون
- كيلو
- كيس
- باكت
- متر
- طن
- لفة
- علبة

### product_units
- id
- product_id
- unit_id
- conversion_factor
- sale_price
- barcode
- is_default

## البيع المرن

النظام يدعم طريقتين للبيع:

### 1. بيع بالكمية
مثال:
- 5 أكياس إسمنت
- 3 كراتين سيراميك
- 2 كيلو مسامير

### 2. بيع بالمبلغ
مثال:
- مسامير بـ 100 ريال
- غراء بـ 500 ريال

في حالة البيع بالمبلغ:
stock_deducted_quantity = entered_amount / unit_price

## فواتير البيع

### sales
- id
- invoice_number
- customer_id
- user_id
- total
- discount
- tax
- paid
- remaining
- payment_method
- sale_status
- created_at

### sale_items
- id
- sale_id
- product_id
- sale_type
- unit_id
- quantity
- unit_price
- entered_amount
- subtotal
- stock_deducted_quantity

sale_type:
- quantity
- amount

## العملاء والديون

### customers
- id
- name
- phone
- address
- notes
- created_at

### customer_payments
- id
- customer_id
- sale_id
- amount
- payment_type
- notes
- created_at

## الموردون والمشتريات

### suppliers
- id
- name
- phone
- address
- notes
- created_at

### purchases
- id
- supplier_id
- user_id
- total
- paid
- remaining
- created_at

### purchase_items
- id
- purchase_id
- product_id
- unit_id
- quantity
- unit_price
- subtotal
- stock_added_quantity

## المصروفات

### expenses
- id
- title
- category
- amount
- notes
- created_at

## حركة المخزون

### stock_movements
- id
- product_id
- user_id
- type
- quantity
- reference_table
- reference_id
- notes
- created_at

type:
- sale
- purchase
- return
- damage
- manual_adjustment

## سجل العمليات

### audit_logs
- id
- user_id
- action
- table_name
- record_id
- old_value
- new_value
- created_at

## الإعدادات

### settings
- id
- key
- value

أمثلة:
- store_name
- store_phone
- store_address
- currency
- tax_rate
- invoice_print_type